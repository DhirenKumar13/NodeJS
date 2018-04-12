var http = require('http');
var server = http.createServer(function (request,response) {
  response.writeHead(200,{"Content-Type" : "text/html"});
  response.end(`
    <!DOCTYPE HTML>
    <html>
      <head>
        <title>Simple Http Server</title>
      </head>
      <body>
        <p>
          <h1> Serving Response</h1>
          <h2> ${request.url}</h2>
          <h2> ${request.method}</h2>
        </p>
      </body>
    </html>
  `);
});
server.listen(3000);
console.log("Server is listening ..")
