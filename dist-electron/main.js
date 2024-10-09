import { app, BrowserWindow } from 'electron';
import path from 'path';
import { isDEV } from './util.js';
app.on("ready", () => {
    const mainWindow = new BrowserWindow({});
    if (isDEV()) {
        mainWindow.loadURL('http://localhost:5173');
    }
    else {
        mainWindow.loadFile(path.join(app.getAppPath(), './dist-react/index.html'));
    }
});
