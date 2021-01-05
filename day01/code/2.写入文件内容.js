const fs = require('fs')
fs.writeFile('./files/1.txt', 'data', function (err) {
  if (err) return console.log('文件写入失败' + err)
  console.log('文件写入成功')
})
