var fs = require('fs');
console.log("Reading Asynchronously ...");
fs.readdir('.',function (err,files) {
  if(err){
    throw err;
  }else {
    console.log(files);
  }
});
console.log('Finished ...');
