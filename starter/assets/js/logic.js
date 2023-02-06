//var timer = document.querySelector(".timer")
var timeEl = document.querySelector("#time")
var startButton = document.getElementById("start")
var submitForm = document.querySelector("#submit")
var feedback = document.querySelector("#feedback")

var questionBox= document.getElementById("question-box")
var questionTitle = document.getElementById("question-title")
var questions 
var startScreen = document.getElementById("start-screen")
var answerResult =  document.getElementById("answer-result")

var timerCount = 90;
var winCounter = 0;
var isWin
var isLose
var finalScore 

//questions

// target html with query selectors
//var question = document.querySelector("#question-title")
var answerButton = document.querySelector(".answer-btn") 
var answer1 = document.getElementById("answer1")
var answer2 = document.getElementById("answer2")
var answer3 = document.getElementById("answer3")
var answer4 = document.getElementById("answer4")
//array of objects 
/*
var questions = [
    {
        question: 'What does HTML stand for?',
        answers: [
            { answerOption: 'Hyper Text Markup Link', correct: false },
            { answerOption: 'Hyper Text Markup Lion', ,
            {correctOption: 'Hyper Text Markup Language', correct: true },
            { answerOption: 'Hyper Text Markup Losers', correct: false },
        ]
    }
  ] 
  */

 
//A start button that when clicked a timer starts and the first question appears.

function startGame() {
  startScreen.classList.add("hide");
  questionBox.classList.remove("hide");
  //text content questionTitle.innerText()
/*  setNextQuestion()

}

function setNextQuestion() {

}
*/





  console.log(questions[0].question)
  //for ( var i = 0; i < questions.length; i++) {
   //show 1 question at a time on web page
   questionTitle.innerText = questions[0].question;
   console.log(questions[0].answers)
//target different answers
   answer1.innerHTML = questions[0].answers[0].answerOption;
   answer2.innerHTML = questions[0].answers[1].answerOption;
   answer3.innerHTML = questions[0].answers[2].correctOption;
   answer4.innerHTML = questions[0].answers[3].answerOption;
   console.log(questions[0].answers[2])
   
   //click event 
   answerChoices.addEventListener("click", function(){
    if (questions[0].answers.correctOption) {
    console.log("Correct!");
    answerResult.append("Correct!")
    //next question
   } else {
    console.log("Wrong! 10 seconds deducted!")
    //deduct timer and next question
    answerResult.append("Wrong!")
   }
   })
 
  }
  
startButton.addEventListener("click", startGame);


function question2() {
  //for ( var i = 0; i < questions.length; i++) {
    //show 1 question at a time on web page
    questionTitle.innerText = questions[1].question;
    console.log(questions[1].answers)
 //target different answers
    answer1.innerHTML = questions[1].answers[0].answerOption;
    answer2.innerHTML = questions[1].answers[1].answerOption;
    answer3.innerHTML = questions[1].answers[2].answerOption;
    answer4.innerHTML = questions[1].answers[3].answerOption;
    if (questions[1].answers[2].correct === true) {
    }
   }

function setStatusClass (element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add("Correct!")
  } else {
    element.classList.add("Wrong!")
  }
}

function setStatusClass (element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.remove("Correct!")
  } else {
    element.classList.remove("Wrong!")
  }
}

function winGame() {
  setWins()
}


//set timer 
function startTimer() {
    timer = setInterval(function() {
      timerCount--;
      timeEl.textContent = timerCount;
      if (timerCount >= 0) {
        if (isWin && timerCount > 0) {
          // Clears interval and stops timer
          clearInterval(timer);
          winGame();
        }
      }
      // Tests if time has run out
      if (timerCount === 0) {
        // Clears interval
        clearInterval(timer);
        loseGame();
      }
    }, 1000);
  } 

  //-10 seconds for wrong answers

//Questions contain buttons for each answer.


//When answer is clicked, the next question appears


//If the answer clicked was incorrect then subtract time from the clock


//game ends


//set wins
function setWins() {
    win.textContent = winCounter;
    localStorage.setItem("winCount", winCounter);
  }

  

// ability to save their initials and their score in submit form to localStorage.setItem("key", value)

//PROMPT BOX WITH HIGHSCORE TO SAVE INITIALS
//var name = prompt()

//addEventListener("submit", saveScore)
//event.preventDefault()


//reset button
//addEventListener("click", resetGame)



