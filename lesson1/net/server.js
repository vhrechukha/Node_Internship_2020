// Include Nodejs' net module.
const net = require('net');

// The port on which the server is listening.
const port = 3000;

// Create a new TCP server.
const server = net.createServer((connection) => {
    console.log('client connected', connection);

    connection.on('end', () => {
        console.log('client disconnected');
    });

    // Now that a TCP connection has been established, the server can send data to
    // the client by writing to its socket.
    connection.write('Hello World!\r\n');
    connection.pipe(connection);
});

// The server listens to a socket for a client to make a connection request.
// Think of a socket as an end point.
server.listen(port, () => {
    console.log('server is listening');
});
