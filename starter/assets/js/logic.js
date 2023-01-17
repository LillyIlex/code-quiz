// vars

var timer = document.querySelector(".timer")
var timeEl = document.querySelector("#time")
var startButton = document.getElementById("start")
var submitForm = document.querySelector("#submit")
var feedback = document.querySelector("#feedback")
var answerButtons = document.querySelector("#choices")
var questionBox= document.getElementById("question-box")
var questionEl = document.getElementById("question-title")
var questions 

var shuffleQuestions, currentQuestionIndex

var timerCount = 90;
var winCounter = 0;
var isWin
var isLose
var finalScore


//init on page load
/*function init() {
    getWins();
    getlosses();
  } */

//A start button that when clicked a timer starts and the first question appears.
//addEventListener("click", startGame)

function startGame() {
startButton.addEventListener("click", startGame);
startButton.classList.add("hide");
//shuffleQuestions = question.sort(() => Math.random() - .5)
currentQuestionIndex = 0
questionBox.classList.remove("hide");
setNextQuestion()
}
startGame()

function setNextQuestion() {
 // resetState()
showQuestion()
}

function showQuestion(question) {
  questionEl.innerText = question.question;
  question.answers.forEach(answer => {
    var button = document.createElement("button");
    button.innerText = answer.text
    button.classList.add("btn")
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener("click", selectAnswer)
  })
}
function selectAnswer() {

}

/* function resetState() {
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonElement.firstChild)
  }
} */

function selectAnswer (event) {
  var selectedButton = event.target
  var correct = selectedButton.dataset.correct;
  setStatusClass(document.body, correct)
  Array.from(answerBUttonElement.children).forEach(button => {
    setStatusClass(button, button.dataset,correct)
  })
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



