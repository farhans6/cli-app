var readlineSync = require('readline-sync');
var score = 0;

function gkGame(question, answer){
  var userAnswer = readlineSync.question(question);
  if(userAnswer == answer){
    score += 1;
    console.log('Right!');
    console.log('Your Score is: ' + score);
  } else {
    score -= 1;
    console.log("Wrong!. Correct answer is: ", answer);
    console.log("Your Score is: " + score);
  }
  console.log("***********************");
}

var questionsList = [
  { question : "What is the Capital of India? ",
    answer : "delhi" },
    { question : "How many States are there is India? ",
    answer : "29"},
    { question : "How many union Teritories are there in India? ", 
    answer : "8"},
    { question : "What is the time zone of India? ",
    answer : 'ist'},
    {
      question : "What is the national Animal of India? ",
      answer : "tiger"},
      {
        question : "How many continents are there in World? ",
        answer : "7"},
        {
          question : "Which is the largest continent in the world? ",
          answer : "asia"
        }
]

for (var i=0; i<questionsList.length; i++){
  var currentQuestion = questionsList[i];
  gkGame(currentQuestion.question, currentQuestion.answer);
}

