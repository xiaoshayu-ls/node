const fs = require('fs')
fs.readFile('./成绩.txt', 'utf8', function (err, dataStr) {
  if (err) {
    return console.log('读取失败' + err.message)
  }
  //   console.log('读取成功' + dataStr)
  const arrOld = dataStr.split(' ')
  const arrNew = []
  arrOld.forEach((item) => {
    arrNew.push(item.replace('=', '：'))
  })
  const newStr = arrNew.replace(' ', '\n')
  fs.writeFile('./files/1.txt', newStr, function (err) {
    if (err) {
      return console.log('写入失败' + err.message)
    }
    console.log('写入成功')
  })
})
