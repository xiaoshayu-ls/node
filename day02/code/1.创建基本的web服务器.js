const http = require('http')
const server = http.createServer()
server.on('request', (request, response) => {
  response.end('ok')
})
server.listen(2600, () => console.log('server running on http://127.0.0.1:2600'))
