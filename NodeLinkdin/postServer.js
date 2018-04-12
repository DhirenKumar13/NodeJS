var http = require('http');
var fs = require('fs');

http.createServer(function(req,res){
  if(req.method === "GET"){
    console.log("GET method called ...");
    res.writeHead(200,{"Content-Type":"text/html"});
    fs.createReadStream('./public/form.html','UTF-8').pipe(res);
  }else if (req.method === "POST") {
    var data = "";
    req.on("data",function (chunk) {
      data += chunk;
    })
    req.on("end",function () {
      res.writeHead(200,{"Content-Type":"text/html"});
      res.end(`
        <!DOCTYPE HTML>
        <html>
          <head>
            <title>Simple POST Server</title>
          </head>
          <body>
            <p>
              <h1> Serving POST method </h1>
              <h2> ${data}</h2>
            </p>
          </body>
        </html>
      `)
    })
    console.log("POST method called ...");
  }
}).listen(3000);
console.log("server started listening on port localhost:3000");
