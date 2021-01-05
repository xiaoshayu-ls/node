const fs = require('fs')
const path = require('path')

const regStyle = /<style>([\s\S]*)<\/style>/
const regScript = /<script>([\s\S]*)<\/script>/

fs.readFile(path.join(__dirname, 'index.html'), 'utf8', function (err, dataStr) {
  if (err) return console.log('读取HTML文件失败' + err.message)
  //   console.log('读取文件成功')
  resolveCSS(dataStr)
  resolveJs(dataStr)
  resolveHTML(dataStr)
})

function resolveCSS(htmlStr) {
  const newCSS = regStyle.exec(htmlStr)[1]

  fs.writeFile(path.join(__dirname, './clock/index.css'), newCSS, function (err) {
    if (err) return console.log('写入样式失败' + err.message)
    console.log('写入样式文件成功')
  })
}

function resolveJs(htmlStr) {
  const newJs = regScript.exec(htmlStr)[1]
  fs.writeFile(path.join(__dirname, './clock/index.js'), newJs, function (err) {
    if (err) return console.log('写入JS失败' + err.message)
    console.log('写入JS成功')
  })
}

function resolveHTML(htmlStr) {
  const st = htmlStr.replace(regStyle, '<link rel="styleSheet" href="./index.css" />').replace(regScript, '<script src="./index.js"></script>')
  fs.writeFile(path.join(__dirname, './clock/index.html'), st, function (err) {
    if (err) return console.log('写入CSS+JS失败' + err.message)
    console.log('写入成功CSS+JS')
  })
}
