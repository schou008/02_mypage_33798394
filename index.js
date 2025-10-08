// My Page Web App

var http = require("http");
// Port Number
const port = 8000;

http.createServer(function(req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- Title of Web Application -->
    <title>My Page Web App</title>
</head>
<body>
    <!-- Header 1 of Web Application -->
    <h1>Welcome to My Page Web App</h1>
    <!-- Header 2 of Web Application -->
    <h2>About Me</h2>
    <!-- Text explaining About Me -->
    <p>My name is Saqib Choudhury</p>
</body>
</html>`);
}).listen(port, function() {
    console.log(`Node server is running on port ${port}...`);
});
