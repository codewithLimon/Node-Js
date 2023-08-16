const http = require('http');
const fs = require('fs');
const path = require('path');

const host = "localhost";
const port = 2023;

const home = path.join(__dirname, '..', 'Client', 'index.html');
const contact = path.join(__dirname, '..', 'Client', 'contact.html');
const about = path.join(__dirname, '..', 'Client', 'about.html');

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        fs.readFile(home, (err, data) => {
            if (err) {
                res.writeHead(500, { "Content-Type": "text/plain" });
                res.end("Internal Server Error");
            } else {
                res.writeHead(200, { "Content-Type": "text/html" });
                res.write(data);
                res.end();
            }
        });
    } else if (req.url === "/contact") {
        fs.readFile(contact, (err, data) => {
            if (err) {
                res.writeHead(500, { "Content-Type": "text/plain" });
                res.end("Internal Server Error");
            } else {
                res.writeHead(200, { "Content-Type": "text/html" });
                res.write(data);
                res.end();
            }
        });
    } else if (req.url === "/about") {
        fs.readFile(about, (err, data) => {
            if (err) {
                res.writeHead(500, { "Content-Type": "text/plain" });
                res.end("Internal Server Error");
            } else {
                res.writeHead(200, { "Content-Type": "text/html" });
                res.write(data);
                res.end();
            }
        });
    } else {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("Not Found");
    }
});

server.listen(port, host, () => {
    console.log(`Server started at http://${host}:${port}`);
});
