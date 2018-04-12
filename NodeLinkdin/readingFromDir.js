var fs = require('fs');
console.log("Reading Synchronously ...");
var files = fs.readdirSync('.');
console.log(files);
console.log('Finished ...');
