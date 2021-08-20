const { createServer } = require('http');

const server = createServer((request, response) => {
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write('<h1>A</h1>');
    return response.end();
})

server.listen(port);