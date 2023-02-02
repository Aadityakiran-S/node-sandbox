const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === "/"){
        res.end("home page");
    }
    else if(req.url === "/about"){
        //BLOCKING CODE !!!!
        for(let i = 0; i < 2000; i++){
            for(let j = 0; j < 2000; j++){
                console.log(`${i} ${j}`);
            }
        }
        res.end("About Page");
    }
    else
        res.end("Error Page");
})

server.listen(3000, () =>{
    console.log("Server is listening on port 3000.....");
})

