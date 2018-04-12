var fs = require('fs');
var path = require('path');
console.log("Reading Asynchronously ...");
fs.readdir('.',function (err,files) {
  if(err){
    throw err;
  }else {
    files.forEach(function(fileName){
      console.log(`%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%`);
      var file = path.join(__dirname,'.',fileName);
      var stats = fs.statSync(file);
      if(stats.isFile()){
        console.log(file);
        fs.readFile(file,'UTF-8',function (err,data) {
          if(err) throw err;
          else console.log(data);
        })
      }else{
        console.log('Not a file');
      }
      console.log(`%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%`);
    });
  }
});
console.log('Finished ...');
