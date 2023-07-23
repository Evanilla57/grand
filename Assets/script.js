var startBtn = document.querySelector("#startQuiz");
var questions = document.querySelector("#challenge");
var selections = document.querySelector("#answers");
var result = document.querySelector("#correct");

// var testQuestions[];

// var testAnswers[];

var quizGame = document.querySelector('#challenge');

function displayQuiz() {
    function showQOne() {
        quizGame.textContent = "test";
    }
    showQOne();
}

startBtn.addEventListener("click", displayQuiz);