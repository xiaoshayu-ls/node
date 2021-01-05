const path = require('path')
const fs = require('fs')

fs.readFile(path.join(__dirname, 'files/2.txt'), 'utf8', function (err, dataStr) {
  if (err) {
    return console.log(err.message)
  }
  console.log(dataStr)
})
