// 跨域
const http = require('http');
const fs = require('fs')
http.createServer((req, res) => {
  if(req.url === '/') {
    const html = fs.readFileSync('./connection.html', 'utf-8')
    res.writeHead(200, {
      'Content-type': 'text/html',
      'Connection': 'close'
      //'Connection': 'close' F12控制台 Network ConnectionID都不一样了
      
    });
    res.end(html);
  } else {
    const img = fs.readFileSync('./pkq.jpg');
    res.writeHead(200, {
      'Content-type': 'image/jpg',
      'Connection': 'close'
      //'Connection': 'close' F12控制台 Network ConnectionID都不一样了

    });
    res.end(img)
    // img请求
  }

}).listen(8787)
console.log('connected')