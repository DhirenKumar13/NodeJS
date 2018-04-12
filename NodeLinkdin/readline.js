var readline = require('readline');
var rl = readline.createInterface(process.stdin,process.stdout);

var person = {
  name : '',
  sayings : []
};

rl.question("Whats is your name ?",function (answers) {
  person.name = answers;
  rl.setPrompt(`What would ${person.name} says \n`);
  rl.prompt();
  rl.on('line',function(saying){
    person.sayings.push(saying.trim());
    if(saying.toLowerCase() === 'exit'){
      person.sayings.pop();
      rl.close();
    }else{
      rl.setPrompt(`What would else ${person.name} say : (exit to leave) \n`);
      rl.prompt();
    }
  });
});

rl.on('close',function(){
  console.log("%s said %j",person.name,person.sayings);
  process.exit();
})
