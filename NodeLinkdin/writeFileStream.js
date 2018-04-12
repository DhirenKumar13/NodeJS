var fs =  require('fs');
var readline = require('readline');
var rl = readline.createInterface(process.stdin,process.stdout);

var Person = {
  name : '',
  sayings : []
};

rl.question("What is your name ?",function(answer){
  Person.name = answer;
  var stream = fs.createWriteStream(Person.name+'.md');
  stream.write(`\n\n ===================================== \n\n`);
  rl.setPrompt('What does {Person.name} say \n');
  rl.prompt();
  rl.on('line',function (saying) {
    if(saying.trim() === 'exit'){
      stream.close();
      rl.close();
    }else{
      stream.write(saying.trim() + " \n ");
      rl.setPrompt(`What else does {Person.name} say : (press 'exit' to exit)\n`);
      rl.prompt();
    }
  });
});

console.log('Writeable Stream Demonstration ... ');
