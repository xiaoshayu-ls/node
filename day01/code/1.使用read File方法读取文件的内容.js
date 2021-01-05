const fs = require('fs')
fs.readFile('./files/1.txt', 'utf8', (err, data) => {
  if (err) {
    return console.log('读取失败' + err)
  }
  console.log('读取成功' + data)
})
