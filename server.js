var http=require('http');
var server = http.createServer(function(request,response){
	console.log("Request Received !!!");
	response.end("Thanks for calling .. Good Day Dhiren!!");
});
server.listen(9999);