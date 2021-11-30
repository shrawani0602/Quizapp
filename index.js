var readlineSync = require("readline-sync");
var userName = readlineSync.question("Enter your name :");
console.log("Hello "+userName+" welcome to the game " );

score=0;
var highscore =
[

  {name:"SHRAWANI", 
  score:10,
  }

]
function play(question,answer)
{
  var userAnswer = readlineSync.question(question);

  if(userAnswer.toUpperCase() === answer.toUpperCase())
  {
    console.log("Right answer");
    score++;
  }
  else
  {
    console.log("wrong answer");
    score--;
  }
}

var quesans=[
  {
    question:"What is the capital of India?",
    answer:"Delhi"
  },
  {
    question:"What is qutub minar?",
    answer:"Delhi"
  },
  {
    question:"What is the Taj Mahal?",
    answer:"Agra"
  },
  {
    question:"What is the capital of Bihar?",
    answer:"Patna"
  },
  {
    question:"What is the national flower of India?",
    answer:"lotus"
  },
  {
    question:"What is the ram mandir being built?",
    answer:"Ayodhya"
  },
  {
    question:"In which month do we celebrate children's day?",
    answer:"November"
  },
  {
    question:"In which month do we celebrate christmas?",
    answer:"December"
  },
  {
    question:"How many wheels are there in national flag?",
    answer:"24"
  },
  {
    question:"In which month do we celebrate independence day?",
    answer:"August"
  },
]

for(var i=0;i<quesans.length;i++)
{
var curr=quesans[i];
play(curr.question,curr.answer);
}

function scores() {
  console.log("Your final score : ", score);

  console.log("Check out the high scores, if your score is higher than this we will update it");

  highscore.map(score => console.log(score.name, " : ", score.score))
}

scores();


