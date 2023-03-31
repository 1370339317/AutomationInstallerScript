const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
// const ffi = require('ffi-napi')
const js_beautify = require('js-beautify');
const fs = require('fs');

// const Dll = ffi.Library(path.resolve('MsgEditorDll.dll'), {
//   ReadXmlFile: ['string', ['string']]
// })


function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      preload: path.join(__dirname, 'preload.js')
    }
  });

  // ipcMain.on('ReadConfigFile', (event, filepath) => {
  //   // const string = Dll.ReadXmlFile(filepath);
  //   // win.webContents.send('UpdateConfig', string);
  // });
  win.loadFile('index.html');

}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
