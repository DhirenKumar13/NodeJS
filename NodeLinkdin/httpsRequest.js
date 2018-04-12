var https = require('https');
var fs = require('fs');

var options = {
  hostname : "en.wikipedia.org",
  port : 443,
  path : "/wiki/Sundar_Pichai",
  method : "GET"
};

var request = https.request(options,function (response) {
  var responseBody = "";
  console.log("Response from the server started ...");
  console.log(`The response status : ${response.statusCode}`);
  console.log("Response Header is %j",response.headers);

  response.setEncoding("UTF-8");
  response.once('data',function (chunkOfData) {
    console.log(chunkOfData);
  });

  response.on('data',function (chunkOfData) {
    console.log(`Chunk Size is : ${chunkOfData.length}`);
    responseBody += chunkOfData;
  });

  response.on('end',function () {
    fs.writeFile('sundar_pichai.html',responseBody,function (err) {
        if(err) throw err;
        else console.log('File Downloaded Successfully');
    });
  });
});

request.on('error',function (error) {
  console.log(error.message);
});

request.end();
