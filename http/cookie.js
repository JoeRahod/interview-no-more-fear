// 跨域
const http = require('http');
const fs = require('fs')
http.createServer((req, res) => {
  console.log('this',this);
  console.log('请求成功', req.url);
  const html = fs.readFileSync('cookie.html', 'utf-8')
  res.writeHead(200, {
    'Content-type': 'text/html',
    'Set-Cookie': ['name=joe;max-age=2', 'age=26;HttpOnly']
  });
  res.end(html);
}).listen(7777)
console.log('server connected')