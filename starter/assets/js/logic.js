// vars

var timer = document.querySelector(".timer")
var timeEl = document.querySelector("#time")
var startButton = document.querySelector("#start")
var submitForm = document.querySelector("#submit")
var feedback = document.querySelector("#feedback")
var choicesButton = document.querySelector("#choices")

var timerCount
var winCounter = 0;
var isWin
var isLose


//init on page load
function init() {
    getWins();
    getlosses();
  }

//A start button that when clicked a timer starts and the first question appears.
//addEventListener("click", startGame)
startButton.addEventListener("click", startGame);


function winGame()
setWins()




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

//addEventListener("submit", saveScore)
//event.preventDefault()


//reset button
//addEventListener("click", resetGame)



