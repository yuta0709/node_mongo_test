'use strict';
const PORT = require('setting'),
const http = require('http');
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write(`Hello ${req.url}`);
    res.end();
})

server.listen(8080);
