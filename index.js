const { app, BrowserWindow } = require('electron');

let win;

function createWindow(){
  win = new BrowserWindow({ 
    width: 1440, 
    height: 1024, 
    frame: false,
    webPreferences: {
      nodeIntegration: true
    }
  });
  win.loadURL('http://localhost:3000');
  
  win.webContents.toggleDevTools();
}

app.on('ready', createWindow);
