const http = require('http');
// console.log(http);

const server = http.createServer((req, res) => {
    res.end("hello world from node js")
});

server.listen(3000);