var startButton = document.getElementById("start")
var questionTitle = document.getElementById("question-title")
var startButton = document.getElementById("start")
var startScreen = document.getElementById("start-screen")
var answerResult = document.getElementById("answer-result")
var answerButton = document.querySelector(".answer-btn")
var answer1 = document.getElementById("answer1")
var answer2 = document.getElementById("answer2")
var answer3 = document.getElementById("answer3")
var answer4 = document.getElementById("answer4")
var answerChoices = document.getElementById("#choices")
var currentQuestionData = questions[currentQuestion];

var currentQuestion = 0


startButton.addEventListener("click", function () {
    startScreen.classList.add("hide");
    questionBox.classList.remove("hide");
    startQuiz();
})


function startQuiz() {

    var currentQuestionData = questions[currentQuestion];

    //show 1 question at a time on web page
    questionTitle.innerText = currentQuestionData.question;

    //target different answers
    answer1.innerHTML = currentQuestionData.a;
    answer2.innerHTML = currentQuestionData.b;
    answer3.innerHTML = currentQuestionData.c;
    answer4.innerHTML = currentQuestionData.d;


    answerChoices.addEventListener("click", function() {
        if (answerButton = questions[currentQuestion].correct) {
        answerResult.append("Correct!")
    } else {
        answerResult.append("Wrong!")
    }
})
currentQuestion++;
if (currentQuestion < currentQuestionData.length) {
    startQuiz();
} else {
    console.log("TIME'S UP)")
}
}