var fs = require('fs');

if(fs.existsSync("newdir")){
  console.log('Directory already exists...');
}else{
  fs.mkdir('newdir',function (err,status) {
    if(err) throw err;
    else console.log('Directory created ...')
  });
}
