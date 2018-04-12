var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var app = express();
var data = [
  {
    "term" : "Sky",
    "defined" : "blue"
  },{
    "term" : "Dhiren",
    "defined" : "Javascript is the next big thing .."
  },{
    "term" : "Swati",
    "defined" : "Ios is the next big thing .."
  }
];

//use bodyParser module to parse the POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));

//our own middleware
app.use(function (req, res, next) {
  console.log(`${req.method} is invoked for ${req.url} URL and ${JSON.stringify(req.body)}`);
  next();
});

app.use(express.static('./public'));

app.use(cors());

app.get('/dictionary-api',function (req,res) {
  console.log("/dictionary-api called ...");
  res.json(data);
});

app.post('/dictionary-api',function (req, res) {
  data.push(req.body);
  res.json(data);
});

app.delete('/dictionary-api/:term',function (req,res) {
  data = data.filter(function(difinition){
    return difinition.term.toLowerCase() !== req.params.term.toLowerCase();
  });
  res.json(data);
});

app.listen(3000);

console.log("Application is listening at port 3000");

module.exports = app;
