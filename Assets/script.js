var startBtn = document.querySelector("#start");
var challengeEl = document.querySelector("#challenge");
var answersEl = document.querySelector("#answers");
var resultEl = document.querySelector("#result");
var timerEl = document.querySelector("#timer");
var secondsLeft = 60;
var nextQ = 0;

var questions = [
    {
    question: "Which of the following is not a primitive element?",
    answer: ["truelean", "string", "number", "undefined"],
    correct: "truelean"
},
    {
    question: "Which HTML element holds the Javascript code?",
    answer: ["<link>", "<script>", "<span>", "<head>"],
    correct: "<script>" 
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
    challengeEl.textContent = questions[nextQ].question;
    for (var i = 0; i < questions[nextQ].answer.length; i++) {
        var answerBtn = document.createElement("button");
        answersEl.appendChild(answerBtn);
        answerBtn.textContent = questions[nextQ].answer[i];
        answerBtn.addEventListener("click", function(event) {
            if (event.target.textContent === questions[nextQ].correct) {
                resultEl.textContent = "Correct!";
                nextQ++;
                while (answersEl.firstChild) {
                    answersEl.removeChild(answersEl.firstChild);
                };
                displayQuiz();
            } 
            else {
                secondsLeft = secondsLeft - 5;
                resultEl.textContent = "Wrong!";
            }
        }
        )
    }
}


startBtn.addEventListener("click", displayQuiz);