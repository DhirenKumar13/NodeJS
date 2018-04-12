var http = require('http');
var data = require('./data/inventory')

http.createServer(function (req,res) {
  console.log(`Requested URL is ${req.url}`);
  if(req.url === "/"){
    res.writeHead(200,{"Content-Type":"text/json"});
    res.end(JSON.stringify(data));
  }else if (req.url === "/instock") {
    res.writeHead(200,{"Content-Type":"text/json"});
    listInStock(res);
  }else if(req.url === "/outofstock"){
    res.writeHead(200,{"Content-Type":"text/json"});
    listOutOfStock(res);
  }else{
    res.writeHead(404,{"Content-Type": "text/plain"});
    res.end("Uhhh! 404 , Page that you have requested is not Found");
  }

}).listen(3000);

console.log("Server is listening at port 3000");

function listInStock(res){
  var stock = data.filter(function(item){
    return item.avail === "In stock"
  });
  res.end(JSON.stringify(stock));
}

function listOutOfStock(res){
  var outOfStock = data.filter(function(item){
    return item.avail === "On back order"
  });
  res.end(JSON.stringify(outOfStock));
}
