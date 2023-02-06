// vars

//questions

// target html with query selectors
var questionBox = document.querySelector("#question-box")
var question = document.querySelector("#question-title")
var answers = document.querySelector("#choices")
var answerButton = document.querySelector(".answer-btn")
var answer1 = document.getElementById("answer1")
var answer2 = document.getElementById("answer2")
var answer3 = document.getElementById("answer3")
var answer4 = document.getElementById("answer4")
//array of objects
var questions = [
    {
        question: 'What does HTML stand for?',
        a: 'Hyper Text Markup Link',
        b: 'Hyper Text Markup Lion',
        c: 'Hyper Text Markup Language',
        d: 'Hyper Text Markup Losers',
        correct: 'c'

    },
    {
        question: 'Where do we create our repo`s?',
        answers: [
            { answerOption: 'GitPub', correct: false },
            { answerOption: 'GitHun', correct: false },
            { answerOption: 'GitHub', correct: true },
            { answerOption: 'Gitify', correct: false },
        ]
    },
    {

        question: 'Where in the HTML would you insert the JavaScript link?',
        answers: [
            { answerOption: 'Head', correct: false },
            { answerOption: 'Body', correct: true },
            { answerOption: 'Header', correct: false },
            { answerOption: 'Footer', correct: false },
        ]
    },
    {
        question: 'A `title` in a HTML doc...',
        answers: [
            { answerOption: 'Names the page and displays in the web browser tab', correct: true },
            { answerOption: 'Gives your HTML file a new name locally', correct: false },
            { answerOption: 'Creates a visible heading on your web app', correct: false },
            { answerOption: 'Doesn`t exist', correct: false },
        ]
    }, {

        question: 'Which is the correct function to get a radomised number?',
        answers: [
            { answerOption: 'Math.floor()', correct: false },
            { answerOption: 'math.rand', correct: false },
            { answerOption: 'Math.ceil()', correct: false },
            { answerOption: 'Math.random()', correct: true },
        ],
    }, {

        question: 'What do we use CSS for?',
        answers: [
            { answerOption: 'To add styling', correct: true },
            { answerOption: 'To add text', correct: false },
            { answerOption: 'To add forms', correct: false },
            { answerOption: 'To add games', correct: false }
        ],
    }, {

        question: '`var` and `let` are both what?',
        answers: [
            { answerOption: 'Methods', correct: false },
            { answerOption: 'Functions', correct: false },
            { answerOption: 'Objects', correct: false },
            { answerOption: 'Variables', correct: true }
        ],
    }, {

        question: 'What best describes how the DOM sees a web-page?',
        answers: [
            { answerOption: 'Branch', correct: false },
            { answerOption: 'Tree', correct: true },
            { answerOption: 'Flower', correct: false },
            { answerOption: 'Bush', correct: false }
        ]
    }
] 