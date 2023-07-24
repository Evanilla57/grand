var startBtn = document.querySelector("#start");
var challengeEl = document.querySelector("#challenge");
var answersEl = document.querySelector("#answers");
var resultEl = document.querySelector("#result");
var timerEl = document.querySelector("#timer");
var secondsLeft = 60;

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

function countDown() {
    var timer = setInterval(function() {
        secondsLeft--;
        timerEl.textContent = secondsLeft;
        if (secondsLeft === 0) {
            clearInterval(timer);
        }
    },
    1000
    );
}



function displayQuiz() {
    countDown();
    startBtn.setAttribute("class", "disabled")
    challengeEl.textContent = questions[0].question;
    answersEl.textContent = questions[0].answer;
    var answerBtn = document.createElement("button");
    answerBtn.textContent = questions[0].answer[0];
    console.log(questions[0].answer);
}

startBtn.addEventListener("click", displayQuiz);