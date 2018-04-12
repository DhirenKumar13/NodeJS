var fs = require('fs');
console.log("*************************************************");
fs.open('sample.txt','r',function(error , handle) {
	if(error){
		console.log("Ohh noooo ! The following error occuerd while reading ");
		console.log(error.message);
	}else{
		var file = handle;
		var buffer = new Buffer(100000);
		fs.read(file,buffer,0,100000,null,function(error , dataread) {
			console.log(buffer.toString('utf8',0,dataread));
			fs.close(file);
			console.log("*************************************************");
		});
	}
});