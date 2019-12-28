const { app, BrowserWindow } = require("electron");

let mainWindow = null; // 在顶层作用域中创建一个变量，引用应用的主窗口


app.on("ready", () => {
  console.log("hello from Electron!");
  mainWindow = new BrowserWindow();
  mainWindow.webContents.loadURL(`file://${__dirname}/index.html`);
});


