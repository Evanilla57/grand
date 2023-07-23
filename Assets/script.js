var startBtn = document.querySelector("#startQuiz");
var qOne = document.querySelector("#question-one")

// function quizContent() {
//     (quizGame.innerHTML == "test");
// };

var quizGame = document.querySelector('#challenge');

function displayQuiz() {
    function showQOne() {
        quizGame.textContent = qOne;
        qOne.style.visibility='visible'
    }
    showQOne();
}

startBtn.addEventListener("click", displayQuiz);

