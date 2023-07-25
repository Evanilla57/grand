var startBtn = document.querySelector("#start");
var challengeEl = document.querySelector("#challenge");
var answersEl = document.querySelector("#answers");
var resultEl = document.querySelector("#result");
var timerEl = document.querySelector("#timer");
var instructionsEl = document.querySelector("#instructions");
var scoreBtn = document.querySelector("#score");
var secondsLeft = 60;
var nextQ = 0;
var isWin = false;
var playerResults = [];

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
    question: "How do you comment a line of code in Javacript?",
    answer: ["//", "*/", "/*", "<-->"],
    correct: "//" 
},
    {
    question: "Which of the following is written in camel case?",
    answer: ["javascript", "JavaScript", "javaScript", "jAvAsCrIpT"],
    correct: "javaScript" 
}];

function countDown() {
    displayQuiz();
    var timer = setInterval(function() {
        secondsLeft--;
        timerEl.textContent = secondsLeft;
        if (secondsLeft === 0) {
            clearInterval(timer);
        }
        if (isWin === true) {
            clearInterval(timer);
            resultEl.textContent = "Your Final Score is " + timerEl.textContent + " Seconds Remaining!";
            saveScore();
            scoreBtn.disabled = false;
            // resultEl.appendChild(startBtn);
            // startBtn.setAttribute("class", "enabled");
        }
    },
    1000
    );
}

function displayQuiz() {
    scoreBtn.disabled = true;
    while (answersEl.firstChild) {
        answersEl.removeChild(answersEl.firstChild);
    }
    if (nextQ > 3) {
        challengeEl.textContent = "Congratulations!";
        isWin = true;
    }
    else {  
        instructionsEl.setAttribute("class", "disabled");
        startBtn.setAttribute("class", "disabled");
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
}

startBtn.addEventListener("click", countDown);

scoreBtn.addEventListener("click", showScore);

function saveScore() {
    playerResults = JSON.parse(localStorage.getItem("player"));
    var player = {
        intitials: window.prompt("Please input your initials"),
        score: timerEl.textContent
    } 
    playerResults.push(player);
    localStorage.setItem("player", JSON.stringify(playerResults));
}

function showScore() {
    var playerScore = JSON.parse(localStorage.getItem("player"));
    console.log(playerScore);
    for (var i = 0; i < playerScore.length; i++) {
        var highScores = document.createElement("li");
    answersEl.appendChild(highScores);
    answersEl.textContent = playerScore[i].intitials + " scored " + playerScore[i].score;
    }
    // var highScores = document.createElement("li");
    // answersEl.appendChild(highScores);
    // answersEl.textContent = playerScore.intitials + " scored " + playerScore.score;
}