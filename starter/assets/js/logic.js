// vars

//questions

// target html with query selectors
var questionBox = document.querySelector("#question-box")
var question = document.querySelector("#question-title")
var answers = document.querySelector("#choices")
var answerBtn = document.querySelector(".answer-btn") 
var answer1 = document.getElementById("answer1")
var answer2 = document.getElementById("answer2")
var answer3 = document.getElementById("answer3")
var answer4 = document.getElementById("answer4")
//array of objects
var questions = [
    {
        question: 'What does HTML stand for?',
        answers: [
            { answerBtn: 'Hyper Text Markup Link', correct: false },
            { answerBtn: 'Hyper Text Markup Lion', correct: false },
            { answerBtn: 'Hyper Text Markup Language', correct: true },
            { answerBtn: 'Hyper Text Markup Losers', correct: false },
        ]
    },
    {
        question: 'Where do we create our repo`s?',
        answers: [
            { answerBtn: 'GitPub', correct: false },
            { answerBtn: 'GitHun', correct: false },
            { answerBtn: 'GitHub', correct: true },
            { answerBtn: 'Gitify', correct: false },
        ]
    },
    {

        question: 'Where in the HTML would you insert the JavaScript link?',
        answers: [
            { answerBtn: 'Head', correct: false },
            { answerBtn: 'Body', correct: true },
            { answerBtn: 'Header', correct: false },
            { answerBtn: 'Footer', correct: false },
        ]
    },
    {
        question: 'A `title` in a HTML doc...',
        answers: [
            { answerBtn: 'Names the page and displays in the web browser tab', correct: true },
            { answerBtn: 'Gives your HTML file a new name locally', correct: false },
            { answerBtn: 'Creates a visible heading on your web app', correct: false },
            { answerBtn: 'Doesn`t exist', correct: false },
        ]
    }, {

        question: 'Which is the correct function to get a radomised number?',
        answers: [
            { answerBtn: 'Math.floor()', correct: false },
            { answerBtn: 'math.rand', correct: false },
            { answerBtn: 'Math.ceil()', correct: false },
            { answerBtn: 'Math.random()', correct: true },
        ],
    }, {

        question: 'What do we use CSS for?',
        answers: [
            { answerBtn: 'To add styling', correct: true },
            { answerBtn: 'To add text', correct: false },
            { answerBtn: 'To add forms', correct: false },
            { answerBtn: 'To add games', correct: false }
        ],
    }, {

        question: '`var`, `const` and `let` are all what?',
        answers: [
            { answerBtn: 'Methods', correct: false },
            { answerBtn: 'Functions', correct: false },
            { answerBtn: 'Objects', correct: false },
            { answerBtn: 'Variables', correct: true }
        ],
    }, {

        question: 'What best describes how the DOM sees a web-page?',
        answers: [
            { answerBtn: 'Branch', correct: false },
            { answerBtn: 'Tree', correct: true },
            { answerBtn: 'Flower', correct: false },
            { answerBtn: 'Bush', correct: false }
        ]
    }
]


var timer = document.querySelector(".timer")
var timeEl = document.querySelector("#time")
var startButton = document.getElementById("start")
var submitForm = document.querySelector("#submit")
var feedback = document.querySelector("#feedback")

var answerChoices = document.querySelector("#choices")
var questionBox= document.getElementById("question-box")
var questionTitle = document.getElementById("question-title")
var questions 
var startScreen = document.getElementById("start-screen") 

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

  /*question1
  if(correct === true) {
    getQuestion2()
  } else {
*/
 
//A start button that when clicked a timer starts and the first question appears.
//addEventListener("click", startGame)

function startGame() {
  startScreen.classList.add("hide");
  questionBox.classList.remove("hide");
  //text content questionTitle.innerText()
  console.log(questions[0].question)
  //for ( var i = 0; i < questions.length; i++) {
   //show 1 question at a time on web page
   questionTitle.innerText = questions[0].question;
   console.log(questions[0].answers)
//target different answers
   answer1.innerHTML = questions[0].answers[0].answerBtn;
   answer2.innerHTML = questions[0].answers[1].answerBtn;
   answer3.innerHTML = questions[0].answers[2].answerBtn;
   answer4.innerHTML = questions[0].answers[3].answerBtn;
   console.log(questions[0].answers[2].correct)
   //click event 
   answerBtn.addEventListener("click", function(){
      if (questions[0].answers[2]) {
    console.log("Correct!");
   }
   })
 
  }

  
startButton.addEventListener("click", startGame);


function question2() {
  //for ( var i = 0; i < questions.length; i++) {
    //show 1 question at a time on web page
    questionTitle.innerText = questions[1].question;
    console.log(questions[0].answers[i])
 //target different answers
    answer1.innerHTML = questions[1].answers[0].answerBtn;
    answer2.innerHTML = questions[1].answers[1].answerBtn;
    answer3.innerHTML = questions[1].answers[2].answerBtn;
    answer4.innerHTML = questions[1].answers[3].answerBtn;
    if (questions[0].answers[i].correct === true) {
    }
   }

/*   if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener("click", selectAnswer)
  }) */


/* function selectAnswer (event) {
  var selectedButton = event.target
  var correct = selectedButton.dataset.correct;
  setStatusClass(document.body, correct)
  Array.from(answerButtonElement.children).forEach(button => {
    setStatusClass(button, button.dataset,correct)
  })
} */

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



