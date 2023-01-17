//questions

// target html with query selectors
var questionBox = document.querySelector("#question-box")
var question = document.querySelector("#question-title")
var answers = document.querySelector("#choices")
var answerBtn = document.querySelector(".answer-btn") 

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
            { answer1: 'Names the page and displays in the web browser tab', correct: true },
            { answer2: 'Gives your HTML file a new name locally', correct: false },
            { answer3: 'Creates a visible heading on your web app', correct: false },
            { answer4: 'Doesn`t exist', correct: false },
        ]
    }, {

        question: 'Which is the correct function to get a radomised number?',
        answers: [
            { answer1: 'Math.floor()', correct: false },
            { answer2: 'math.rand', correct: false },
            { answer3: 'Math.ceil()', correct: false },
            { answer4: 'Math.random()', correct: true },
        ],
    }, {

        question: 'What do we use CSS for?',
        answers: [
            { answer1: 'To add styling', correct: true },
            { nswer2: 'To add text', correct: false },
            { nswer3: 'To add forms', correct: false },
            { answer4: 'To add games', correct: false }
        ],
    }, {

        question: '`var`, `const` and `let` are all what?',
        answers: [
            { answer1: 'Methods', correct: false },
            { answer2: 'Functions', correct: false },
            { answer3: 'Objects', correct: false },
            { answer4: 'Variables', correct: true }
        ],
    }, {

        question: 'What best describes how the DOM sees a web-page?',
        answers: [
            { answer1: 'Branch', correct: false },
            { answer2: 'Tree', correct: true },
            { answer3: 'Flower', correct: false },
            { answer4: 'Bush', correct: false }
        ]
    }
]


