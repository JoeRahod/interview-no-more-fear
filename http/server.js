// 跨域
const http = require('http');

http.createServer((req, res) => {
  res.writeHead(200, {
    'Access-Control-Allow-Origin': '*', // 服务器端解决跨域
    'Access-Control-Allow-Methods': 'POST,PUT,DELETE',
    'Access-Control-Allow-Headers': 'X-Test-Cors', // 允许的自定义请求头
    'Access-Control-Max-Age': '10' // 秒为单位
    // 'Content-type': 'text/plain'
  })
  res.end('8080端口数据')

}).listen(8080)
console.log('8080服务器')