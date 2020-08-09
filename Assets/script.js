// ========= HTML elements=========================//
var startBtnElem = document.getElementById("startBtn")
var startScreenElem = document.getElementById("start-screen")
var quizScreenElem = document.getElementById("quiz-screen")
var scoreScreen = document.getElementById("score-screen")
var displayTitleElem = document.getElementById("questionTitle");
var secondsDisplay = document.getElementById("seconds");
var buttonContainer = document.getElementById("button-container");

//-------Question Bank / Object------------------//
var questionBank = [
 {
   questionTitle:"what is the first letter of the alphabet?",
   choices: ["a", "b", "c", "z"], 
   correct: "a"
 },

 {
  questionTitle:"what is the last letter of the alphabet?",
  choices: ["a", "b", "c", "z"], 
  correct: "z"
},

{
  questionTitle:"what is your favorite food?",
  choices: ["apples", "burgers", "sushi", "bread"], 
  correct: "burgers"
},

{
  questionTitle:"what is the best weather?",
  choices: ["rain", "snow", "sun", "cloudy"], 
  correct: "snow"
},
{
  questionTitle:"what is the best weather?",
  choices: ["rain", "snow", "sun", "cloudy"], 
  correct: "snow"
},

{
  questionTitle:"what is the best ice cream?",
  choices: ["choc", "vanilla", "strawberry", "coffee"], 
  correct: "coffee"
}
]
//-----------------------------------------------//

console.log(questionBank[0].questionTitle)


//=======================================================================================

//starts at first question in object------
var currentQuestion = 0;
// currentQuestion += 1


//--starts quiz and hides start screen--------------
startBtnElem.addEventListener("click", function(){
  console.log("click")
  startScreenElem.classList.add("hide")
  quizScreenElem.classList.remove("hide")
  displayTitleElem.textContent = questionBank[currentQuestion].questionTitle
  var currentChoices = questionBank[currentQuestion].choices
  
//-----cycles through to populate answer buttons--------
  for(var i=0; i < 4; i++){
    console.log(currentChoices[i])
    document.getElementById("answer-" +i).textContent = currentChoices[i];
    // answerButtonElem.addEventListener("click") = checkAnswer;
    } 


    
});






//======================================================================================

buttonContainer.addEventListener("click", function(event){
//  console.log(event);
//  console.log("test");

  if (event.target.nodeName == "BUTTON") {

    // console.log("button clicked;")
    console.log(event.target.innerText);
  }
});


for (i=0; i<7; i++){
var currentChoices = questionBank[currentQuestion].choices;
if (event.target.nodeName == "BUTTON")
event.target.innerText = currentChoices.correct;
alert("correct!");







}


















//----------start timer----------------------//

var secondsLeft = 15;

function startTimer() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    secondsDisplay.textContent = secondsLeft + " seconds remaining";

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      sendMessage();
    }

  }, 1000);
}

function sendMessage() {
  secondsDisplay.textContent = "game over ";
}

startBtnElem.addEventListener("click", startTimer);



//check answer

//==check answer=================

// answerButtonElem.addEventListener("click", function() {
//   // count++;
//   // counter.textContent = count;

//   // localStorage.setItem("count", count);
//   console.log("test");
// });

//=================================================================================//

