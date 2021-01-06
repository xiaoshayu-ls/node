const http = require('http')
const server = http.createServer()
server.on('request', (req, res) => {
  const url = req.url
  let content = '<h1>404 Not found!!!</h1>'
  if (url == '/' || url == '/index.html') {
    content = '<h1>访问的是首页页面</h1>'
  } else if (url == '/about.html') {
    content = '<h1>访问的是关于页面</h1>'
  }
  res.setHeader('Content-Type', 'text/html;charset=utf-8')
  res.end('content')
})

server.listen(2700, () => {
  console.log('server running on http://127.0.0.1:2700')
})
