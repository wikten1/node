import http from 'http';

const server = http.createServer((req, res) => {
    return res.end('Hello Worldd');
})

server.listen(3333)