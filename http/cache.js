// 跨域
const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
  console.log('req.url',req.url,)
  if(req.url == '/') {
    const html = fs.readFileSync('cache.html', 'utf-8')
    res.writeHead(200, {
      'Content-type': 'text/html'
    })
    res.end(html)
  }
  
  if(req.url === '/testcache.js') {
    const etag = req.headers['if-none-match']
    if(etag === '456') {
      res.writeHead(304, {
        'Content-type': 'text/javascript',
        'Cache-Control': 'max-age=10,no-cache',
        'Last-Modified': '123',
        'Etag': '456'
      })
      // res.end('etag命中走缓存')
    } else {
      res.writeHead(200, {
        'Content-type': 'text/javascript',
        'Cache-Control': 'max-age=10,no-store',
        'Last-Modified': '123',
        'Etag': '456'
      })
    }

    res.end('console.log("res.end返回的不是字符2")')

  }

}).listen(9999)
console.log('9999服务器')  