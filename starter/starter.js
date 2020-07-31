const logoSvg = '<svg width="60" height="60" viewBox="0 0 100 100"><defs><linearGradient id="a" x1="82.85" y1="30.41" x2="51.26" y2="105.9" gradientTransform="matrix(1, 0, 0, -1, -22.41, 110.97)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#6c56cc"/><stop offset="1" stop-color="#9785e5"/></linearGradient></defs><polygon points="44.61 0 12.91 17.52 0 45.45 19.57 90.47 47.35 100 52.44 89.8 63 26.39 44.61 0" fill="#34208c"/><polygon points="63 26.39 43.44 14.41 16.43 35.7 47.35 100 52.44 89.8 63 26.39" fill="url(#a)"/><polygon points="63 26.39 63 26.39 44.61 0 43.44 14.41 63 26.39" fill="#af9ff4"/><polygon points="43.44 14.41 44.61 0 12.91 17.52 16.43 35.7 43.44 14.41" fill="#4a37a0"/><polygon points="16.43 35.7 19.57 90.47 47.35 100 16.43 35.7" fill="#4a37a0"/></svg>';
const closeButtonSvg = '<svg aria-hidden="false" width="12" height="12" viewBox="0 0 12 12"><polygon fill="currentColor" fill-rule="evenodd" points="11 1.576 6.583 6 11 10.424 10.424 11 6 6.583 1.576 11 1 10.424 5.417 6 1 1.576 1.576 1 6 5.417 10.424 1"></polygon></svg>';
const minimizeButtonSvg = '<svg aria-hidden="false" width="12" height="12" viewBox="0 0 12 12"><rect fill="currentColor" width="10" height="1" x="1" y="6"></rect></svg>';

const {remote} = require('electron');
const {BrowserWindow} = remote;
const win = BrowserWindow.getFocusedWindow();

function animateScrollLeft(element, left, duration) {
	// cancel if already on top
	if (element.scrollLeft === left) {
		return;
	}

	let factor = 1;
	if (left < element.scrollLeft) {
		factor = -1;
	}
	const cosParameter = Math.abs(left - element.scrollLeft) / 2;
	let scrollCount = 0, oldTimestamp = null;

	function step(newTimestamp) {
		if (oldTimestamp !== null) {
			// if duration is 0 scrollCount will be Infinity
			scrollCount += Math.PI * (newTimestamp - oldTimestamp) / duration;
			if (scrollCount >= Math.PI) {
				return element.scrollLeft = left;
			}
			element.scrollLeft = cosParameter - factor * cosParameter * Math.cos(scrollCount);
		}
		oldTimestamp = newTimestamp;
		window.requestAnimationFrame(step);
	}

	window.requestAnimationFrame(step);
}

/*
  Explanation:
  - pi is the length/end point of the cosinus intervall (see below)
  - newTimestamp indicates the current time when callbacks queued by requestAnimationFrame begin to fire.
    (for more information see https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame)
  - newTimestamp - oldTimestamp equals the delta time

    a * cos (bx + c) + d                        | c translates along the x axis = 0
  = a * cos (bx) + d                            | d translates along the y axis = 1 -> only positive y values
  = a * cos (bx) + 1                            | a stretches along the y axis = cosParameter = window.scrollY / 2
  = cosParameter + cosParameter * (cos bx)  | b stretches along the x axis = scrollCount = Math.PI / (scrollDuration / (newTimestamp - oldTimestamp))
  = cosParameter + cosParameter * (cos scrollCount * x)
*/

function addTitlebar(titlebar_name) {
	let titlebar = fish('.starter-screen').createEl('div');
	titlebar.setAttribute('id', titlebar_name);
	titlebar.setAttribute('class', titlebar_name);

	let title = document.createElement('div');
	title.setAttribute('class', titlebar_name + '-text');
	// title.innerText = titlebar_text;
	titlebar.appendChild(title);

	let minimizeButton = titlebar.createEl('div', {cls: 'top-titlebar-button'});
	minimizeButton.innerHTML = minimizeButtonSvg;
	minimizeButton.addEventListener('click', () => {
		win.minimize();
	});
	let closeButton = titlebar.createEl('div', {cls: 'top-titlebar-button mod-close'});
	closeButton.innerHTML = closeButtonSvg;
	closeButton.addEventListener('click', () => {
		win.close();
	});
	let divider = document.createElement('div');
	divider.setAttribute('class', titlebar_name + '-divider');
	titlebar.appendChild(divider);
}

function updateContentStyle() {
	let content = document.getElementById('content');
	if (!content) {
		return;
	}

	let left = 0;
	let top = 0;
	let width = window.innerWidth;
	let height = window.innerHeight;

	let titlebar = document.getElementById('top-titlebar');
	if (titlebar) {
		height -= titlebar.offsetHeight;
		top += titlebar.offsetHeight;
	}

	let contentStyle = 'position: absolute; ';
	contentStyle += 'left: ' + left + 'px; ';
	contentStyle += 'top: ' + top + 'px; ';
	contentStyle += 'width: ' + width + 'px; ';
	contentStyle += 'height: ' + height + 'px; ';
	content.setAttribute('style', contentStyle);
}

function getOwnName(path) {
	let p = require('path');
	return p.basename(path);
}

function sendNotice(noticeText) {
	let body = document.querySelector('body');
	let noticeEl = body.createEl('div', {cls: 'notice', text: noticeText});
	setTimeout(() => {
		setTimeout(() => {
			noticeEl.addClass('mod-disappearing');
			setTimeout(() => {
				noticeEl.detach();
			}, 1000);
		});
	}, 4000);
}

function displayRecentVaults() {
	let electron = require('electron');
	let ipcRenderer = electron.ipcRenderer;
	let vaults = ipcRenderer.sendSync('vaultList');
	let innerStartScreenEl = fish('.starter-screen-inner');

	if (Object.keys(vaults).length > 0) {
		let recentVaultsEl = fish('.recent-vaults') || innerStartScreenEl.createEl('div', {cls: 'recent-vaults'});
		let recentVaultListEl = fish('.recent-vaults-list') || recentVaultsEl.createEl('div', {cls: 'recent-vaults-list'});

		recentVaultListEl.empty();

		let vaultSorted = Object.values(vaults);
		vaultSorted.sort((a, b) => b.ts - a.ts);

		for (let vault of vaultSorted) {
			let item = recentVaultListEl.createEl('div', {cls: 'recent-vaults-list-item'});
			item.createEl('div', {cls: 'recent-vaults-list-item-name', text: getOwnName(vault.path)});
			item.createEl('div', {cls: 'recent-vaults-list-item-path', text: vault.path});
			item.createEl('div', {cls: 'recent-vaults-list-item-delete-button'}, el => {
				el.innerHTML = closeButtonSvg;
				el.addEventListener('click', (e) => {
					if (!ipcRenderer.sendSync('vaultRemove', vault.path)) {
						sendNotice(`Can't remove a currently open vault.`);
					}
					displayRecentVaults();
					e.stopPropagation();
				});
			});
			item.addEventListener('click', () => {
				let result = ipcRenderer.sendSync('vaultOpen', vault.path, false);
				if (result === true) {
					window.close();
				}
				else {
					sendNotice(`Failed to open, ${result}.`);
				}
			});
		}
	}
	else {
		let recentVaultsEl = fish('.recent-vaults');

		if (recentVaultsEl) {
			recentVaultsEl.remove();
		}
	}

}

window.onresize = function () {
	updateContentStyle();
};

window.onload = function () {
	addTitlebar('top-titlebar', '../icon.png', 'Obsidian');

	updateContentStyle();

	let dom = fish('.starter-screen');
	let electron = require('electron');
	let ipcRenderer = electron.ipcRenderer;

	let oldVault = localStorage.getItem('obsidian-vault-path');
	if (oldVault) {
		localStorage.removeItem('obsidian-vault-path');
		if (ipcRenderer.sendSync('vaultOpen', oldVault, false) === true) {
			window.close();
		}
	}

	let innerStartScreenEl = dom.createEl('div', {cls: 'starter-screen-inner'});

	displayRecentVaults();

	let splashEl = innerStartScreenEl.createEl('div', {cls: 'splash'});
	let splashBrandEl = splashEl.createEl('div', {cls: 'splash-brand'});
	splashBrandEl.createEl('div', {cls: 'splash-brand-logo'}, el => {
		el.innerHTML = logoSvg;
	});
	splashBrandEl.createEl('div', {cls: 'splash-brand-name', text: 'Obsidian'});
	splashBrandEl.createEl('div', {
		cls: 'splash-brand-version',
		text: `Beta version ${electron.ipcRenderer.sendSync('version')}`
	});

	let openVaultOptionsContainer = splashEl.createEl('div', {cls: 'open-vault-options-container'});
	let openVaultOptionsEl = openVaultOptionsContainer.createEl('div', {cls: 'open-vault-options mod-open-vault'});
	let existingFolderOption = openVaultOptionsEl.createEl('div', {cls: 'open-vault-option setting-item'});
	existingFolderOption.createEl('div', {cls: 'setting-item-info'}, el => {
		el.createEl('div', {cls: 'setting-item-name', text: 'Open folder as vault'});
		el.createEl('div', {
			cls: 'setting-item-description',
			text: 'Choose an existing folder of Markdown files'
		});
	});
	existingFolderOption.createEl('div', {cls: 'setting-item-control'}, el => {
		el.createEl('button', {text: 'Open'}, el => {
			el.addEventListener('click', () => {
				let selectedFolders = electron.remote.dialog.showOpenDialogSync({properties: ['openDirectory']});
				if (selectedFolders && selectedFolders.length > 0) {
					let result = ipcRenderer.sendSync('vaultOpen', selectedFolders[0], false);
					if (result === true) {
						window.close();
					}
					else {
						sendNotice(`Failed to open, ${result}.`);
					}
				}
			});
		});
	});

	let createNewVaultOption = openVaultOptionsEl.createEl('div', {cls: 'open-vault-option setting-item'});
	createNewVaultOption.createEl('div', {cls: 'setting-item-info'}, el => {
		el.createEl('div', {cls: 'setting-item-name', text: 'Create new vault'});
		el.createEl('div', {
			cls: 'setting-item-description',
			text: 'Create a new Obsidian vault under a folder.'
		});
	});
	createNewVaultOption.createEl('div', {cls: 'setting-item-control'}, el => {
		el.createEl('button', {text: 'Create'}, el => {
			el.addEventListener('click', () => {
				animateScrollLeft(openVaultOptionsContainer, 500, 300);
			});
		});
	});

	let openHelpVaultOption = openVaultOptionsEl.createEl('div', {cls: 'open-vault-option setting-item'});
	openHelpVaultOption.createEl('div', {cls: 'setting-item-info'}, el => {
		el.createEl('div', {cls: 'setting-item-name', text: 'Open help vault'});
		el.createEl('div', {
			cls: 'setting-item-description',
			text: 'Open a "Demo & Help" vault.'
		});
	});
	openHelpVaultOption.createEl('div', {cls: 'setting-item-control'}, el => {
		el.createEl('button', {text: 'Help'}, el => {
			el.addEventListener('click', () => {
				electron.ipcRenderer.sendSync('helpdocs');
			});
		});
	});

	let folderPathDescription, vaultNameInput, folderPath;
	let createVaultOptionsEl = openVaultOptionsContainer.createEl('div', {cls: 'open-vault-options mod-create-vault'});
	createVaultOptionsEl.createEl('div', {cls: 'back-button', text: '<- Back'}, el => {
		el.addEventListener('click', () => {
			animateScrollLeft(openVaultOptionsContainer, 0, 300);
		});
	});
	createVaultOptionsEl.createEl('div', {cls: 'setting-item'}, el => {
		el.createEl('div', {cls: 'setting-item-info'}, el => {
			el.createEl('div', {cls: 'setting-item-name', text: 'Vault name'});
			el.createEl('div', {
				cls: 'setting-item-description',
				text: 'Pick a name for your awesome vault.'
			});
		});
		el.createEl('div', {cls: 'setting-item-control'}, el => {
			vaultNameInput = el.createEl('input', {type: 'text'}, el => {
				el.setAttribute('placeholder', 'Vault name')
			});
		});
	});

	createVaultOptionsEl.createEl('div', {cls: 'setting-item'}, el => {
		el.createEl('div', {cls: 'setting-item-info'}, el => {
			el.createEl('div', {cls: 'setting-item-name', text: 'Location'});
			folderPathDescription = el.createEl('div', {
				cls: 'setting-item-description',
				text: 'Pick a place to put your new vault.'
			});
		});
		el.createEl('div', {cls: 'setting-item-control'}, el => {
			el.createEl('button', {text: 'Browse'}, (el) => {
				el.addEventListener('click', () => {
					let selectedFolders = electron.remote.dialog.showOpenDialogSync({properties: ['openDirectory']});

					if (selectedFolders && selectedFolders.length > 0) {
						folderPath = selectedFolders[0];
						folderPathDescription.innerHTML = `Your new vault will be placed in <span class='u-pop'>"${folderPath}"</span>.`;
					}
				});
			});
		});
	});
	createVaultOptionsEl.createEl('div', {cls: 'u-center-text'}, el => {
		el.createEl('button', {cls: 'mod-cta', text: 'Create'}, (el) => {
			el.addEventListener('click', () => {
				let name = vaultNameInput.value;

				if (!name) {
					sendNotice('Vault name cannot be empty.');
					return;
				}

				if (!folderPath) {
					sendNotice('Please pick a valid folder.');
					return;
				}

				let newFolderPath = folderPath + '/' + name;

				try {
					let result = ipcRenderer.sendSync('vaultOpen', newFolderPath, true);
					if (result === true) {
						window.close();
					}
					else {
						sendNotice(`Failed to create vault, ${result}.`);
					}
				} catch (error) {
					sendNotice('Could not create vault at the given location. Please double check the location and permission.');
				}
			});
		});
	});
};
