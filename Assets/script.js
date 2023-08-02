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
    //Key:Value Pairs are given for the question, possible answers, and correct answer
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
        //if statement to clear interval when timer runs out
        if (secondsLeft === 0) {
            clearInterval(timer);
        }
        //if statement for win condition
        if (isWin === true) {
            //timer interval is cleared
            clearInterval(timer);
            //text is displayed on the  screen to confirm user's final score
            resultEl.textContent = "Your Final Score is " + timerEl.textContent + " Seconds Remaining!";
            //score is saved
            saveScore();
            //score button is no longer disabled
            scoreBtn.disabled = false;
        }
    },
    //timer goes by seconds
    1000
    );
}

//function for displaying quiz questions
function displayQuiz() {
    //children are removed at beginning of quiz
    kill();
    //if statement for congratulatory message is user completes last question
    if (nextQ > 3) {
        challengeEl.textContent = "Congratulations!";
        //win condition is met upon completion of last question
        isWin = true;
    }
    //else statement for when user has not yet completed the last question
    else {  
        //instructions and start button are disabled during quiz
        instructionsEl.setAttribute("class", "disabled");
        startBtn.setAttribute("class", "disabled");
        //quiz questions are displayed as text
        challengeEl.textContent = questions[nextQ].question;
        //for loop goes through each question one at a time
        for (var i = 0; i < questions[nextQ].answer.length; i++) {
            //answer options are displayed as buttons
            var answerBtn = document.createElement("button");
            answersEl.appendChild(answerBtn);
            answerBtn.textContent = questions[nextQ].answer[i];
            //even listener added for answer options 
            answerBtn.addEventListener("click", function(event) {
                //if correct answer button is selected, "Correct!" text will display
                if (event.target.textContent === questions[nextQ].correct) {
                    resultEl.textContent = "Correct!";
                    //next question is produced as question number increments
                    nextQ++;
                    //children are removed
                    kill();
                    //quiz function is called for next question
                    displayQuiz();
                } 
                //else statement removes five seconds from timer for wrong answers, displays "Wrong!" as text
                else {
                    secondsLeft = secondsLeft - 5;
                    resultEl.textContent = "Wrong!";
                }
            }
        )
    }
    }
}

//event listener to initiate countDown function upon start button being clicked
startBtn.addEventListener("click", countDown);

//event listener for score button to initiate showScore function 
scoreBtn.addEventListener("click", showScore);

//function to allow user to save score
function saveScore() {
    //sets playerResults array equal to parsed player data from local storage
    playerResults = JSON.parse(localStorage.getItem("player"));
    console.log(playerResults);
    //if statement to set playerResults as an empty array if data is null
    if (playerResults === null) {
        playerResults = [];
        
    }
    //variable for player with initials key prompting input of player initials, score set as time left on timer
    var player = {
        intitials: window.prompt("Please input your initials"),
        score: timerEl.textContent
    } 
    //player information is added to end of playerResults array
    playerResults.push(player);
    //stores playerResults as string in local storage
    localStorage.setItem("player", JSON.stringify(playerResults));
}

//function to display score
function showScore() {
    //variable for parsed player information retrieved from local storage
    var playerScore = JSON.parse(localStorage.getItem("player"));
    //kill function removes children while score is displayed
    kill();
    //for loop creates list items and appends scores of player initials
    for (var i = 0; i < playerScore.length; i++) {
        var highScores = document.createElement("li");
    answersEl.appendChild(highScores);
    highScores.textContent = playerScore[i].intitials + " scored " + playerScore[i].score;
    }
}

//function to remove previous children
function kill() {
    while (answersEl.firstChild) {
        answersEl.removeChild(answersEl.firstChild);
    }
}