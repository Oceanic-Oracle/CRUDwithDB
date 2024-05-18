const http = require('http');
const fork = require('./fork');

const PORT = 3000;

let server = http.createServer(fork);

server.listen(PORT, 'localhost', () => {
    console.log('Listening on PORT: 3000');
});