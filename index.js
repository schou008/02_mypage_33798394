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
    <title>My Page Web Application</title>
</head>
<body>
    <!-- Header 1 - Title of Web Application -->
    <h1>Welcome to My Page Web Application</h1>
    <!-- Header 2 - About Me of Web Application -->
    <h2>About Me</h2>
    <!-- Text explaining About Me -->
    <p>My name is Saqib Choudhury</p>
</body>
</html>`);
}).listen(port, function() {
    // Running the local Port Number
    console.log(`Node server is running on port ${port}...`);
});
