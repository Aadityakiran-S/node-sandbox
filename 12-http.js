const http = require('http');

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');
    if (req.url === '/') {
        res.write('Welcome to our home page');
    }
    else if (req.url === '/about') {
        res.write('This is our short history');
    }
    else {
        res.write(`
        <h1>Oops!</h1>
        <p>Can't seem to find what you're looking for</p>
        <a href="/">Are you lost? Wanna go back home?</a>
        `);        
    }
    res.end();
});

server.listen(3000);