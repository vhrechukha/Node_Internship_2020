const dgram = require('dgram');

// creating a udp server
const server = dgram.createSocket('udp4');

server.on('error', (err) => {
    console.log(`server error:\n${err.stack}`);
    server.close();
});

// emits on new datagram msg
server.on('message', (msg, rinfo) => {
    // need to convert to string
    // since message is received as buffer
    // receive the message and do task
    console.log(`server got: ${msg.toString()} from ${rinfo.address}:${rinfo.port}`);
});

server.on('listening', () => {
    const address = server.address();
    console.log(`server listening ${address.address}:${address.port}`);
});

// Prints: server listening 0.0.0.0:41234
server.bind(41234);
