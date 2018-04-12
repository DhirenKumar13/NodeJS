var http = require('http');
var fs = require('fs');
var path = require('path');

http.createServer(function (request,response) {
  console.log(`The url requested is : ${request.url} of method type ${request.method}`);
  if(request.url === "/"){
    fs.readFile("./public/index.html","UTF-8",function (error,html) {
      if(error){
        console.log(error.message);
        throw err;
      }
      else{
        response.writeHead(200,{"Content-Type" : "text/html"});
        response.end(html);
      }
    });
  }else if (request.url.match(/.css$/)) {
    var cssPath = path.join(__dirname,"public",request.url);
    var readStream = fs.createReadStream(cssPath,'UTF-8');
    response.writeHead(200,{"Content-Type" : "text/css"})
    readStream.pipe(response);
  }else if (request.url.match(/.jpg$/)) {
    var imagePath = path.join(__dirname,"public",request.url);
    var readStream = fs.createReadStream(imagePath);
    response.writeHead(200,{"Content-Type" : "image/jpeg"})
    readStream.pipe(response);
  }
  else{
    response.writeHead(404,{"Content-Type": "text/plain"});
    response.end("Uhhh! 404 , Page that you have requested is not Found");
  }
}).listen(3000);
console.log("File Server is listening ... on port 3000");
