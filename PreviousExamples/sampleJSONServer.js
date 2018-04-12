var http = require('http');

var server = http.createServer(handle_incoming_request);

function handle_incoming_request(request , response){
	console.log("The request is of type "+request.method+ " and url is "+request.url);
	response.writeHead(200,{"Content-type" : "application/json"});
	response.end(JSON.stringify({error : null}) + '\n');
};

server.listen(9999);