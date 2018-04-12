var fs = require('fs');
var stream = fs.createReadStream('./Chat/chat.log','UTF-8');

var data = "";

stream.once('data',function () {
  console.log('\n\n\n');
  console.log("Started reading the file ...");
  console.log('\n\n\n');
});

stream.on('data',function (chunk) {
    process.stdout.write(` chunk size : ${chunk.length} || `);
    data += chunk;
});

stream.on('end',function () {
  console.log('\n\n\n');
  console.log(`Finished reading the file ...of size ${data.length}`);
  console.log('\n\n\n');
});
