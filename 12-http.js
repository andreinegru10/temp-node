const http = require("http");

const server = http.createServer((req, res) => {
    console.log(req.url);
    
    if (req.url === "/") {
        res.write("Welcome to our server")
        res.end();
    }
    else if (req.url === "/about") {
        res.write("Here is out short hostory")
        res.end();
    }
    else {
        res.write("Invalid page");
        res.end();
    }
});

server.listen(5000);