const http = require('http');

const port = 3000;

const server = new http.Server();

server.on('request', (req, res) => {
    console.log('client connected');

    req.on('end', () => {
        console.log('client disconnected');
    });

    res.end('Hello, user!');
});

server.listen(port, () => {
    console.log('server is listening');
});
