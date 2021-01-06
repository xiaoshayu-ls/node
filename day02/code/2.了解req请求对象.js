const http = require('http')
const sever = http.createServer()
sever.on('request', (req, res) => {
  const url = req.url
  const method = req.method
  //   const str = `Your request url is ${url},and request method is ${method}`
  const str = `您的请求地址是${url},请求方式是${method}`
  res.setHeader('Content-Type', 'text/html;charset=utf-8')
  res.end(`<h2>${str}</h2>`)
})
sever.listen(2600, () => console.log('sverer http://127.0.0.1:2600'))
