/**
 * Created by zhangsanfeng on 2021/8/9.
 */

const {app, BrowserWindow} = require('electron')

let mainWindow

function createWindow () {
  mainWindow = new BrowserWindow({width: 800, height: 600})

  // mainWindow.loadFile('index.html')
  //mainWindow.loadFile('http://www.vdouw.com')
  mainWindow.loadURL('http://system.tuwen789.com')

  // mainWindow.webContents.openDevTools()

  mainWindow.on('closed', function () {
    mainWindow = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow()
  }
})