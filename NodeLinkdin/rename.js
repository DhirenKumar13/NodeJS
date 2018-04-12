var fs =require('fs');
fs.renameSync('./newdir/hello.js','hello.json');
console.log('File renamed ...');
fs.rename('./newdir/hello.json','./hello.json',function(err,status){
    if (err) {
        console.log(err);
        console.log(status);
    }else{
        console.log("File moved ...");
    }
    
});