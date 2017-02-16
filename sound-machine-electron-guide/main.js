'use strict';

// var electron = require('app');
// var BrowserWindow = require('browser-window');

// var mainWindow = null;

const {app} = require('electron');
const {BrowserWindow} = require('electron');

app.on('ready', function() {
    mainWindow = new BrowserWindow({
        frame: false,
        height: 700,
        resizeable: false,
        width: 800
    });

    mainWindow.loadUrl('file://' + __dirname + '/app/index.html');
});