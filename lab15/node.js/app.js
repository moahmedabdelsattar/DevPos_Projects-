const http = require('http');

const PORT = process.env.APP_PORT || 3000;

http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Node.js App is Running\n');
}).listen(PORT);

