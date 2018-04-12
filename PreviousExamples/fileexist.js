var fs = require('fs');

function FileObject(){
	this.filename = null;
	this.exist = function(callback){
		var myFile = this;
		console.log("I am looking for the file named : "+this.filename);
		fs.open(this.filename,'r',function(err,data){
			if(err){
				console.log(myFile.filename +' is the filename which doesn\'t exist');
				callback(false);
			}else{
				console.log(myFile.filename +' is the filename which does INDEED exist');
				callback(true);
			}
		});
	};
}

var fobj = new FileObject();
fobj.filename = 'sample.txt';
fobj.exist(function(does_it_exist){
	console.log('The file existance is :'+does_it_exist);
});