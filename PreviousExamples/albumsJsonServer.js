var http = require('http');

var fs = require('fs');

var server = http.createServer(handle_incoming_request);

function handle_incoming_request(req , res){
	console.log("Incoming request is of type "+req.method);
	load_albums(function(error , albums){
		if(error){
			res.writeHead(503,{"Content-type":"application/json"});
			res.end(JSON.stringify({error : "file_error",message : error.code}));
		}
		res.writeHead(200,{"Content-type":"application/json"});
		res.end(JSON.stringify({error : null ,data : {albums:albums}}) + '\n');

	})
};

function load_albums(callback){
	fs.readdir('albums/',function(error,image_albums){
		if(error){
			callback(error);
			return;
		}
		var dir_only =[];
		(function repeatAgain(i){
			if(i>=image_albums.length){
				callback(null,dir_only);
				return;
			}
			fs.stat('albums/'+image_albums[i],function(error , directory){
				if(error){
					callback(error);
					return;
				}

				if(directory.isDirectory()){
					console.log(directory.isDirectory());
					dir_only.push(image_albums[i]);
					
				}
				repeatAgain(i+1);
			});
		})(0);
			
	});
};

server.listen(9999);