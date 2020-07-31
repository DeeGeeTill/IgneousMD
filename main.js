let isMac = process.platform === 'darwin';

// Source: https://github.com/parshap/node-sanitize-filename/blob/master/index.js
let illegalRe = /[\/?<>\\:*|"]/g;
let controlRe = /[\x00-\x1f\x80-\x9f]/g;
let reservedRe = /^\.+$/;
let windowsReservedRe = /^(con|prn|aux|nul|com[0-9]|lpt[0-9])(\..*)?$/i;
let windowsTrailingRe = /[. ]+$/;

function sanitize_filename(input, replacement) {
	return input
		.replace(illegalRe, replacement)
		.replace(controlRe, replacement)
		.replace(reservedRe, replacement)
		.replace(windowsReservedRe, replacement)
		.replace(windowsTrailingRe, replacement);
}

function genUid(length) {
	let array = [];
	for (let i = 0; i < length; i++) {
		array.push((Math.random() * 16 | 0).toString(16));
	}
	return array.join('');
}

module.exports = function (RES_PATH, updateEvents) {
	let path = require('path');
	let fs = require('fs');
	let {app, BrowserWindow, shell, protocol, Menu, screen, dialog, ipcMain} = require('electron');

	let gotTheLock = app.requestSingleInstanceLock();

	if (!gotTheLock) {
		app.quit();
		return;
	}

	let update = '';
	updateEvents.on('update-manual-required', () => {
		update = 'update-manual-required';
	});
	updateEvents.on('update-downloaded', () => {
		update = 'update-downloaded';
	});

	let getSettingPath = (id) => path.join(app.getPath('userData'), id + '.json');

	function settingsSave(id, data) {
		fs.writeFileSync(getSettingPath(id), JSON.stringify(data));
	}

	function settingsLoad(id) {
		try {
			return JSON.parse(fs.readFileSync(getSettingPath(id), 'utf8')) || {};
		} catch (e) {
		}
		return {};
	}

	function checkPerm(fullPath) {
		let testfile = path.join(fullPath, '.obtest');
		try {
			fs.writeFileSync(testfile, '');
			fs.unlinkSync(testfile);
			return true;
		} catch (err) {
			return false;
		}
	}

	let SCHEME = 'app';
	let PROTOCOL = SCHEME + '://';
	let URL_ROOT = PROTOCOL + 'obsidian.md/';

	// Load settings
	let settings = settingsLoad('obsidian');
	if (!settings || typeof settings !== 'object') {
		settings = {};
	}
	let vaults = settings.vaults || {};
	for (let id in vaults) {
		let vault = vaults[id];
		vault.path = path.resolve(vault.path);
		if (!vault.path || !fs.existsSync(vault.path)) {
			delete vaults[id];
		}
	}
	settings.vaults = vaults;
	if (settings.insider) {
		updateEvents.emit('insider', true);
	}

	function saveGlobalSettings() {
		settingsSave('obsidian', settings);
	}

	let windows = {};

	function createWindow(id) {
		if (windows[id]) {
			let win = windows[id];
			if (win.isMinimized()) {
				win.restore();
			}
			win.focus();
			return;
		}
		let winSettings = settingsLoad(id);
		let winConfig = {
			width: 800,
			height: 600,
			autoHideMenuBar: !winSettings.showMenu,
			webPreferences: {
				nodeIntegration: true,
				spellcheck: true,
			}
		};

		// Try to set some sensible defaults
		try {
			let workarea = screen.getPrimaryDisplay().workAreaSize;
			winConfig.width = workarea.width;
			winConfig.height = workarea.height;
		} catch (e) {
		}

		// Try to load window sizes from config
		if (winSettings.x !== undefined &&
			winSettings.y !== undefined &&
			winSettings.width !== undefined &&
			winSettings.height !== undefined) {

			let isConfigGood = true;
			// Check it's within bounds
			try {
				let success = false;
				for (let display of screen.getAllDisplays()) {
					let area = display.workArea;
					if (winSettings.x < area.x + area.width &&
						winSettings.x + winSettings.width > area.x &&
						winSettings.y < area.y + area.height &&
						winSettings.y + winSettings.height > area.y
					) {
						success = true;
						break;
					}
				}
				isConfigGood = success;
			} catch (e) {
			}

			if (isConfigGood) {
				winConfig.x = winSettings.x;
				winConfig.y = winSettings.y;
				winConfig.width = winSettings.width;
				winConfig.height = winSettings.height;
			}
		}

		const win = new BrowserWindow(winConfig);
		windows[id] = win;
		let webContents = win.webContents;

		if (winSettings.isMaximized) {
			win.maximize();
		}

		if (winSettings.devTools) {
			webContents.openDevTools();
		}

		function isNormal() {
			return !win.isMaximized() && !win.isMinimized() && !win.isFullScreen();
		}

		function updateState() {
			try {
				let bounds = win.getBounds();
				if (isNormal()) {
					winSettings.x = bounds.x;
					winSettings.y = bounds.y;
					winSettings.width = bounds.width;
					winSettings.height = bounds.height;
				}
				winSettings.isMaximized = win.isMaximized();
				winSettings.showMenu = !win.autoHideMenuBar;
				winSettings.devTools = webContents.isDevToolsOpened();
			} catch (e) {
			}
		}

		webContents.on('new-window', (e, url) => {
			e.preventDefault();
			url = decodeURI(url);
			console.log('Opening file/page: ' + url);
			shell.openExternal(url);
		});
		webContents.on('will-navigate', (e, url) => {
			if (url.indexOf(URL_ROOT) !== 0) {
				e.preventDefault();
				url = decodeURI(url);
				console.log('Opening file/page: ' + url);
				shell.openExternal(url);
			}
			// Stop weird links from navigating the app
			if (url.indexOf(URL_ROOT + 'index.html') !== 0) {
				e.preventDefault();
			}
		});

		win.on('app-command', (e, cmd) => {
			if (cmd === 'browser-backward' && webContents.canGoBack()) {
				webContents.goBack();
			}
			else if (cmd === 'browser-forward' && webContents.canGoForward()) {
				webContents.goForward();
			}
		});
		win.on('swipe', (e, direction) => {
			if (direction === 'left' && webContents.canGoBack()) {
				webContents.goBack();
			}
			else if (direction === 'right' && webContents.canGoForward()) {
				webContents.goForward();
			}
		});

		webContents.on('context-menu', (e, props) => {
			const editFlags = props.editFlags;
			const hasText = props.selectionText.trim().length > 0;
			const can = type => editFlags[`can${type}`] && hasText;

			let template = [
				{
					accelerator: 'CmdOrCtrl+X',
					label: 'Cut',
					role: can('Cut') ? 'cut' : '',
					enabled: can('Cut'),
					visible: props.isEditable
				},
				{
					accelerator: 'CmdOrCtrl+C',
					label: 'Copy',
					role: can('Copy') ? 'copy' : '',
					enabled: can('Copy'),
					visible: props.isEditable || hasText
				},
				{
					accelerator: 'CmdOrCtrl+V',
					label: 'Paste',
					role: editFlags.canPaste ? 'paste' : '',
					enabled: editFlags.canPaste,
					visible: props.isEditable
				},
				{
					accelerator: 'CmdOrCtrl+A',
					label: 'Select All',
					role: 'selectall',
				}];

			let misspelled = props.misspelledWord;
			if (misspelled && misspelled.length >= 1) {
				let corrections = props.dictionarySuggestions;

				let new_template = [];

				if (corrections && corrections.length > 0) {
					corrections.slice(0, 5).forEach((correction) => {
						new_template.push({
							label: correction,
							click: () => {
								webContents.replaceMisspelling(correction);
							}
						});
					});
				}
				else {
					new_template.push({
						label: 'No suggestion',
						enabled: false
					});
				}

				new_template.push({
					label: 'Add to Dictionary',
					click: () => {
						webContents.session.addWordToSpellCheckerDictionary(misspelled);
						webContents.replaceMisspelling(misspelled);
					}
				});
				new_template.push({type: 'separator'});
				template = new_template.concat(template);
			}

			Menu.buildFromTemplate(template).popup(win);
		});

		win.on('close', () => {
			updateState();
			settingsSave(id, winSettings);
			delete windows[id];

			// Closing the last one, save last open to this one
			if (Object.keys(windows).length === 0) {
				settings.last_open = id;
				saveGlobalSettings();
				if (!starterWin) {
					app.quit();
				}
			}
		});

		let updateStateTimer;

		function requestUpdateState() {
			clearTimeout(updateStateTimer);
			updateStateTimer = setTimeout(updateState, 100);
		}

		win.on('resize', requestUpdateState);
		win.on('move', requestUpdateState);

		win.loadURL(URL_ROOT + 'index.html');
		settings.last_open = id;
		saveGlobalSettings();
	}

	let starterWin;

	function openStarter() {
		if (starterWin) {
			if (starterWin.isMinimized()) {
				starterWin.restore();
			}
			starterWin.focus();
			return;
		}
		let win = starterWin = new BrowserWindow({
			width: 700, height: 580,
			maximizable: false, resizable: false, fullscreenable: false,
			frame: false, webPreferences: {nodeIntegration: true}
		});
		win.loadURL(URL_ROOT + 'starter/index.html');
		win.on('close', () => {
			starterWin = null;
		});
	}

	app.whenReady().then(() => {
		app.on('second-instance', (event, commandLine, workingDirectory) => {
			openStarter();
		});

		protocol.registerFileProtocol('app', (req, callback) => {
			let url = req.url;
			// Strip query and hash components
			if (url.indexOf('?') > 0) {
				url = url.substr(0, url.indexOf('?'));
			}
			if (url.indexOf('#') > 0) {
				url = url.substr(0, url.indexOf('#'));
			}
			if (url.indexOf(URL_ROOT) === 0) {
				url = decodeURIComponent(url.substr(URL_ROOT.length));
				url = path.join(RES_PATH, url);
			}
			callback({path: url});
		});

		ipcMain.on('version', (event) => {
			let pkg = path.join(RES_PATH, 'package.json');
			let version;
			try {
				if (fs.existsSync(pkg)) {
					version = JSON.parse(fs.readFileSync(pkg, 'utf8')).version;
				}
			} catch (e) {
			}
			if (!version) {
				version = app.getVersion();
			}
			event.returnValue = version;
		});
		ipcMain.on('update', (event) => {
			event.returnValue = update;
		});
		ipcMain.on('relaunch', (event) => {
			event.returnValue = '';
			console.log('Relaunching!');
			app.relaunch();
			app.quit();
		});
		ipcMain.on('insiderBuild', (event, arg) => {
			if (arg === true) {
				settings.insider = true;
				updateEvents.emit('insider', true);
				saveGlobalSettings();
			}
			else if (arg === false) {
				delete settings.insider;
				updateEvents.emit('insider', false);
				saveGlobalSettings();
			}
			event.returnValue = settings.insider;
		});
		ipcMain.on('vault', (event) => {
			for (let id in windows) {
				if (windows[id].webContents === event.sender) {
					event.returnValue = path.resolve(vaults[id].path);
					return;
				}
			}
			event.returnValue = '';
		});
		ipcMain.on('vaultList', (event) => {
			event.returnValue = vaults;
		});
		ipcMain.on('vaultRemove', (event, vaultpath) => {
			if (vaultpath && typeof vaultpath === 'string') {
				for (let id in vaults) {
					let vault = vaults[id];
					if (vault.path === vaultpath) {
						if (windows[id]) {
							console.log(windows[id])
							event.returnValue = false;
							return;
						}
						event.returnValue = true;
						delete vaults[id];
						saveGlobalSettings();
						return;
					}
				}
			}
			event.returnValue = false;
		});
		ipcMain.on('vaultOpen', (event, vaultpath, create) => {
			if (create) {
				try {
					fs.mkdirSync(vaultpath, {recursive: true});
				} catch (e) {
					event.returnValue = false;
					return;
				}
			}
			event.returnValue = openVault(vaultpath);
		});
		ipcMain.on('starter', (event) => {
			event.returnValue = null;
			openStarter();
		});
		ipcMain.on('helpdocs', (event) => {
			event.returnValue = null;
			openHelp();
		});

		function openVault(vaultpath) {
			if (vaultpath && typeof vaultpath === 'string') {
				vaultpath = path.resolve(vaultpath);
				if (!fs.existsSync(vaultpath)) {
					return 'folder not found';
				}
				if (!checkPerm(vaultpath)) {
					return 'no permission to access folder';
				}

				for (let id in vaults) {
					let vault = vaults[id];
					if (vault.path === vaultpath) {
						vault.ts = Date.now();
						createWindow(id);
						return true;
					}
				}
				let id = genUid(16);
				vaults[id] = {
					path: vaultpath,
					ts: Date.now(),
				}
				createWindow(id);
				return true;
			}
			return 'folder not found';
		}

		function openHelp() {
			let src = path.join(RES_PATH, 'HelpDocs');
			let dest = path.join(app.getPath('userData'), 'Obsidian Help');

			// Check if it's open before overwriting
			for (let id in windows) {
				let vault = vaults[id];
				if (vault.path === dest) {
					vault.ts = Date.now();
					createWindow(id);
					return;
				}
			}
			recursiveCopyFolder(src, dest);
			openVault(dest);
		}

		function recursiveCopyFolder(src, dest) {
			// Create folder first
			fs.mkdirSync(dest, {recursive: true});
			// Can't use withFileTypes here because asar doesn't give us file names
			let files = fs.readdirSync(src);

			for (let file of files) {
				let childSrc = path.join(src, file);
				let stat = fs.statSync(childSrc);
				let childDest = dest + '/' + file;
				if (stat.isFile()) {
					fs.writeFileSync(childDest, fs.readFileSync(childSrc));
				}
				if (stat.isDirectory()) {
					recursiveCopyFolder(childSrc, childDest);
				}
			}
		}

		const template = [
			{
				label: '&Edit',
				submenu: [
					{role: 'undo'},
					{role: 'redo'},
					{type: 'separator'},
					{role: 'cut'},
					{role: 'copy'},
					{role: 'paste'},
					{role: 'pasteAndMatchStyle'},
					{role: 'delete'},
					{role: 'selectAll'}
				]
			},
			{
				label: '&View',
				submenu: [
					{role: 'reload'},
					{role: 'minimize'},
					{type: 'separator'},
					{role: 'resetZoom'},
					{role: 'zoomIn', accelerator: 'CommandOrControl+='},
					{role: 'zoomOut', accelerator: 'CommandOrControl+-'},
					{type: 'separator'},
					{
						label: 'Navigate back',
						accelerator: isMac ? 'CmdOrCtrl+Left' : 'Alt+Left',
						click(item, focusedWindow) {
							if (focusedWindow) {
								focusedWindow.webContents.goBack();
							}
						}
					},
					{
						label: 'Navigate forward',
						accelerator: isMac ? 'CmdOrCtrl+Right' : 'Alt+Right',
						click(item, focusedWindow) {
							if (focusedWindow) {
								focusedWindow.webContents.goForward();
							}
						}
					},
					{
						label: 'Auto-Hide Main Menu',
						click(item, focusedWindow) {
							if (focusedWindow) {
								focusedWindow.autoHideMenuBar = !focusedWindow.autoHideMenuBar;
								focusedWindow.setMenuBarVisibility(true);
							}
						}
					},
					{type: 'separator'},
					{role: 'togglefullscreen'},
					{role: 'toggleDevTools'},
				]
			},
			{
				label: '&Help',
				role: 'help',
				submenu: [
					{
						label: 'Open Help',
						click: () => openHelp(),
					},
					{
						label: 'Homepage',
						click: () => shell.openExternal('https://obsidian.md'),
					},
					{
						label: 'Community',
						click: () => shell.openExternal('https://obsidian.md/community'),
					},
					// {
					// 	label: 'Help Center',
					// 	click: () => shell.openExternal('https://help.obsidian.md'),
					// },
				]
			}
		];

		let print = {
			label: 'Print',
			accelerator: 'CommandOrControl+P',
			click(item, focusedWindow) {
				if (focusedWindow) {
					focusedWindow.webContents.print();
				}
			}
		};

		let print_to_pdf = {
			label: 'Print to PDF',
			accelerator: 'CommandOrControl+Shift+P',
			async click(item, focusedWindow) {
				if (!focusedWindow) {
					return;
				}

				let filename = focusedWindow.getTitle();

				filename = sanitize_filename(filename);

				let result = await dialog.showSaveDialog(focusedWindow, {
					title: 'Save PDF',
					defaultPath: '*/' + filename + '.pdf',
					filters: [
						{name: 'PDF file', extensions: ['pdf']},
						{name: 'All Files', extensions: ['*']}
					]
				});

				if (result.canceled) {
					return;
				}

				console.log('Printing to PDF file', result.filePath);
				let data = await focusedWindow.webContents.printToPDF({});
				fs.writeFileSync(result.filePath, data);
			}
		};

		if (isMac) {
			template.unshift({
				label: '&Obsidian',
				submenu: [
					{
						role: 'hide',
						label: 'Hide Obsidian'
					},
					{role: 'hideOthers'},
					{role: 'unhide'},
					{type: 'separator'},
					// print,
					// print_to_pdf,
					{
						role: 'quit',
						label: 'Quit Obsidian'
					}
				]
			});
			template[1].submenu.push(
				{type: 'separator'},
				{
					label: 'Speech',
					submenu: [
						{role: 'startspeaking'},
						{role: 'stopspeaking'}
					]
				}
			);
		}
		else {
			template.unshift({
				label: '&File',
				submenu: [
					// print,
					// print_to_pdf,
					{role: 'quit'}
				]
			})
		}

		Menu.setApplicationMenu(Menu.buildFromTemplate(template));

		// app.allowRendererProcessReuse = true;
		app.on('window-all-closed', () => {
			app.quit();
		});

		app.on('activate', () => {
			if (BrowserWindow.getAllWindows().length === 0) {
				openStarter();
			}
		});

		let id = settings.last_open;
		if (id && vaults.hasOwnProperty(id)) {
			createWindow(id);
		}
		else {
			openStarter();
		}
	});
};
