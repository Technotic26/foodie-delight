import http from 'http';

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World\n');
});

server.listen(8888, '127.0.0.1', () => {
  console.log('Test server running at http://localhost:8888/');
});