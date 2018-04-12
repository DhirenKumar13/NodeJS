var fs = require('fs');
fs.readdirSync('./newdir').forEach(function (filename) {
  fs.unlink('./newdir/'+filename,function (err,status) {
    if(err){
      throw err;
    }else{
      console.log(filename + " is removed ...");
    }
  })
});

fs.rmdir('./newdir',function (err) {
  if(err) throw err;
  else{
    console.log("Directory removed successfully ...");
  }
})
