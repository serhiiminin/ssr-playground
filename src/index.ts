const http = require('http');

const hostname = '127.0.0.1';
const port = 9000;

const server = http.createServer((req: any, res: any) => {
  if(req.method !== "GET") {
    res.statusCode = 405;
    res.setHeader('Content-Type', 'text/html');
    return res.end(`The request method ${req.method} is inappropriate for the URL /`);
  }
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('Node http server welcomes you\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
