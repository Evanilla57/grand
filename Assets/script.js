//variables for selected classes in html
var startBtn = document.querySelector("#start");
var challengeEl = document.querySelector("#challenge");
var answersEl = document.querySelector("#answers");
var resultEl = document.querySelector("#result");
var timerEl = document.querySelector("#timer");
var instructionsEl = document.querySelector("#instructions");
var scoreBtn = document.querySelector("#score");
//variable for time left in the time
var secondsLeft = 60;
//variable for first position of each question
var nextQ = 0;
//variable for win condition
var isWin = false;
//variable for array to store results
var playerResults = [];

//variable to hold the questions, answers, and correct answer choice with key:value pairs
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

//function for quiz and timer to begin
function countDown() {
    //game starts with first question
    displayQuiz();
    //timer starts counting down from 60
    var timer = setInterval(function() {
        secondsLeft--;
        //number of seconds left is diplayed on screen
        timerEl.textContent = secondsLeft;
        if (secondsLeft === 0) {
            clearInterval(timer);
        }
        if (isWin === true) {
            clearInterval(timer);
            resultEl.textContent = "Your Final Score is " + timerEl.textContent + " Seconds Remaining!";
            saveScore();
            scoreBtn.disabled = false;
        }
    },
    1000
    );
}

function displayQuiz() {
    
    kill();
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
                    kill();
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
    kill();
    for (var i = 0; i < playerScore.length; i++) {
        var highScores = document.createElement("li");
    answersEl.appendChild(highScores);
    highScores.textContent = playerScore[i].intitials + " scored " + playerScore[i].score;
    }
}

function kill() {
    while (answersEl.firstChild) {
        answersEl.removeChild(answersEl.firstChild);
    }
}