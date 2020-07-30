var http = require("http");
const config = require('./config');

http.createServer(function (request, response) {
   // Send the HTTP header 
   // HTTP Status: 200 : OK
   // Content Type: text/plain
   response.writeHead(200, {'Content-Type': 'text/plain'});
   
   // Send the response body as "below"
   response.end('Welcome to SATY Learning \nBuild, Run, & Continuously Deploy Docker Containers to Azure App Service');
}).listen(config.port);

// Console will print the message
console.log(`Server started on port ${config.port}`);