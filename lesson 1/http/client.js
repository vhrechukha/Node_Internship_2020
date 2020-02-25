const http = require('http');

const port = 3000;

let req = http.request({
    hostname: 'localhost',
    port
}, () => {
    console.log('connected to server!');
});

req.on('response', (res) => {
    res.on('data', (data) => {
        console.log(data.toString());
    });
    res.on('end', () => {
        console.info('disconnected from server');
    });
});

req.end();
