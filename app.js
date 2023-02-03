const http = require('http');

// const server = http.createServer((req, res) => {
//     res.end('Welcome');
// });

//Using Event Emitter API
const server = http.createServer();
//emits request event
//subscribe to it / listen for it / respond to it -> all are basically the same
server.on('request', (req, res) => { //This 'request' event is default syntax
    res.end('Welcome');
});

server.listen(3000);