var readline = require('readline');
var rl = readline.createInterface(process.stdin,process.stdout);
var fs = require('fs');

var person = {
  name : '',
  sayings : []
};

rl.question("Whats is your name ?",function (answers) {
  person.name = answers;
  fs.writeFileSync(person.name+'.md',`${person.name}\n======================\n\n`);
  rl.setPrompt(`What would ${person.name} says \n`);
  rl.prompt();
  rl.on('line',function(saying){
    person.sayings.push(saying.trim());
    fs.appendFile(person.name+'.md',`***) ${saying.trim()} \n`);
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
