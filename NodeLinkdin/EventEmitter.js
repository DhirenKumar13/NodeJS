var emitter = require("events").EventEmitter;
var personUtil = require('util');

var Person = function(name){
  this.name = name;
}

personUtil.inherits(Person,emitter);

var dhiren = new Person("Dhiren Kumar");

dhiren.on('speak',function(msg,status){
  console.log(`${dhiren.name} said ${msg} has a status of ${status}`);
});

dhiren.on('sleep',function(status){
  console.log(`${dhiren.name} is ${status}`);
});

dhiren.emit('speak','NodeJS is an essential technology to learn',200);

dhiren.emit('sleep',' spleeping');
