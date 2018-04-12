var http = require('http');

var fs = require('fs');

var server = http.createServer(handle_incoming_request);

function handle_incoming_request(req , res){
	console.log("Incoming request is of type "+req.method);
	if(req.url == '/albums.json'){
		handle_load_albums(req,res);
	}else if(req.url.substr(0,7) == '/albums'
		&& req.url.substr(req.url.length - 5) == '.json'){
		handle_get_albums(req,res);
	}else{
		res.writeHead(503,{"Content-type":"application/json"});
		res.end(JSON.stringify({error : "unknown_resource"}));
	}
};

function handle_load_albums(req,res){
	load_albums(function(error , albums){
		if(error){
			res.writeHead(503,{"Content-type":"application/json"});
			res.end(JSON.stringify({error : "file_error",message : error.code}));
		}
		res.writeHead(200,{"Content-type":"application/json"});
		res.end(JSON.stringify({error : null ,data : {albums:albums}}) + '\n');

	})
};

function handle_get_albums(req,res){
	var album_name = req.url.substr(7,req.url.length - 12);

	load_album(album_name,function(error , photos){
		if(error){
			res.writeHead(503,{"Content-type":"application/json"});
			res.end(JSON.stringify({error : "file_error",message : error.code}));
		}
		res.writeHead(200,{"Content-type":"application/json"});
		res.end(JSON.stringify({error : null ,data : { album : { album_name : album_name , 
			photos : photos }}}) + '\n');

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

function load_album(album_name,callback){
	fs.readdir('albums/'+album_name,function(error,image_albums){
		if(error){
			callback(error);
			return;
		}
		var photos_only =[];
		(function repeatAgain(i){
			if(i>=image_albums.length){
				callback(null,photos_only);
				return;
			}
			fs.stat('albums/'+album_name+'/'+image_albums[i],function(error , directory){
				if(error){
					callback(error);
					return;
				}

				if(directory.isFile()){
					photos_only.push(image_albums[i]);
					
				}
				repeatAgain(i+1);
			});
		})(0);
			
	});
};

server.listen(9998);