var questions = [
  "Whats is your name ?",
  "What is your age ?",
  "Who is your girlfriend ?",
  "What is her age ?"
];

var answers = [];

function ask(indexOfQuestionArray){
  process.stdout.write(`\n \n ${questions[indexOfQuestionArray]} \n \n`);
  process.stdout.write(`>>`);
}

process.stdin.on('data',function (data) {
  answers.push(data.toString().trim());
  if(answers.length < questions.length){
    ask(answers.length);
  }else{
    process.exit();
  }
});

process.on('exit',function () {
  console.log(`${answers[0]} of age ${answers[1]} age has a girlfriend named ${answers[2]} of age ${answers[3]} \n`);
})

ask(0);
