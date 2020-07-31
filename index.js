let path = require('path');
let crypto = require('crypto');
let fs = require('fs');
let EventEmitter = require('events');
let {app, protocol} = require('electron');

protocol.registerSchemesAsPrivileged([
	{scheme: 'app', privileges: {standard: true, secure: true}}
]);

let updateEvents = new EventEmitter();

require('./main.js')(app.getAppPath(), updateEvents);
