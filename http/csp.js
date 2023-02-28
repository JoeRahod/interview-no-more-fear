// 跨域
const http = require('http');
const fs = require('fs')
http.createServer((req, res) => {
  if (req.url === '/') {
    const html = fs.readFileSync('csp.html', 'utf-8')
    res.writeHead(200, {
      'Content-type': 'text/html',
      // 'Content-Security-Policy': 'default-src \'self\'; report-uri /report'
    });
    res.end(html);
  } else {
    res.writeHead(200, {
      'Content-type': 'text/javascript',
    });
    res.end('console.log("csp test")');
  }
}).listen(8989)
console.log('csp connected')