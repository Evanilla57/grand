var startBtn = document.querySelector("#start");
var challengeEl = document.querySelector("#challenge");
var answersEl = document.querySelector("#answers");
var resultEl = document.querySelector("#result");
var timerEl = document.querySelector("#timer")

var questions = [
    {
    question: "What is the answer?",
    answer: ["0", "1", "2", "3"],
    correct: "0" 
},
    {
    question: "What is the answer?",
    answer: ["0", "1", "2", "3"],
    correct: "1" 
},
    {
    question: "What is the answer?",
    answer: ["0", "1", "2", "3"],
    correct: "2" 
},
    {
    question: "What is the answer?",
    answer: ["0", "1", "2", "3"],
    correct: "3" 
}];

// var testQuestions[];

// var testAnswers[];

var quizGame = document.querySelector('#challenge');

function displayQuiz() {
    // function showQOne() {
    //     quizGame.textContent = "test";
    }
    // showQOne();
}

startBtn.addEventListener("click", displayQuiz);