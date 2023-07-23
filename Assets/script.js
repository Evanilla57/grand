var startBtn = document.querySelector("#startQuiz");

var qOne = document.querySelector("#question-one");

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