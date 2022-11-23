// Hides unwanted div
questionsDiv.style.visibility = 'hidden';

// Global variables
var seconds;
var timerSec = 75;
var countdown = document.querySelector(".countdown");
var userScore = 0;
var displayTimer = 1;

// Questions and answers for quiz in single nestedArray (remove nestedArray)
myArray = [
    questOne = ["Commonly used data types DO NOT incldue:", "alerts", 'booleans', "strings", 'numbers'],
    questTwo = ["The condition in an if / else statement is enclosed within ___.", "quotes", 'curly brackets', "parentheses", 'square brackets'],
    questThree = ["Arrays in JavaScript can be used to store ___.", "numbers and strings", 'booleans', "other arrays", 'all of the above'],
    questFour = ["String values must be enclosed within __ when being assigned to variables.", "commas", 'quotes', "curly brackets", 'parentheses'],
    questFive = ["A very useful tool used during development and debugging for printing content to the debugger is:", "JavaScript", 'terminal/bash', "for loops", 'console.log']    
]

// Variables for question change - decrease the array each time a question is answered
var questionsArray = [myArray[0][0], myArray[1][0], myArray[2][0], myArray[3][0], myArray[4][0]];
var questionsArrayIndex = 0;

var viewHighScores = document.querySelector('.anchor');

var correctAns = document.getElementById("correctAns");
var wrongAns = document.getElementById("wrongAns");

function startQuiz() {
    // Hides answer check area
    questionsDiv.style.visibility = 'visible';
    // Deletes start screen
    document.getElementById("removeElem").remove();
    // Shuffles array
    shuffle(questionsArray);
    // Gets random question to start game    
    chooseQuestion();
    // Populates quiz game
    populateQuiz();
    // Starts game timer
    timerStart();
}

// Shuffles the questionsArray to provide "unique" experiece per game. Uses array arguement as a keyword to access data
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

// Changes to next question
function chooseQuestion() {
   
    randomQuestion = questionsArray[questionsArrayIndex]; 

    return randomQuestion;
};

// Populate the quiz
function populateQuiz() {

    if (randomQuestion == myArray[0][0] || randomQuestion == myArray[1][0] || randomQuestion == myArray[2][0] || randomQuestion == myArray[3][0] || randomQuestion == myArray[4][0]) {

        $("#quesBody").text(chooseQuestion());
        
    }

    checkAns();

};




function checkAns() {
    if (randomQuestion == myArray[0][0]) {
        for (i = 1; i < myArray[0].length; i++) {
            $("#ans" + i).text(myArray[0][i]);
        }

    }

    if (randomQuestion == myArray[3][0]) {

        for (i = 1; i < myArray[3].length; i++) {
            $("#ans" + i).text(myArray[3][i]);
        }

    }

    if (randomQuestion === myArray[1][0]) {

        for (i = 1; i < myArray[1].length; i++) {
            $("#ans" + i).text(myArray[1][i]);
        }

    }

    if (randomQuestion == myArray[2][0]) {
        for (i = 1; i < myArray[2].length; i++) {
            $("#ans" + i).text(myArray[2][i]);
        }
      
    }

    if (randomQuestion == myArray[4][0]) {
        for (i = 1; i < myArray[4].length; i++) {
            $("#ans" + i).text(myArray[4][i]);
        }       

    }

    

}

function nextQuestion() {    

    setTimeout(function(){
        correctAns.innerText = '';
    }, 1000);

    setTimeout(function(){
        wrongAns.innerText = '';
    }, 1000);
    
    console.log(questionsArrayIndex);
    // console.log(chooseQuestion());

    if (questionsArrayIndex < 5) {
        questionsArrayIndex++;
        chooseQuestion();
        populateQuiz();
        console.log(questionsArrayIndex);
    }
    
    if (questionsArrayIndex == 5){
        finalQuestion();
    }
}

$(".buttons").on('click', function () {
    console.log($(this));
    if ($(this)[0].innerText == myArray[0][1] ||
        $(this)[0].innerText == myArray[3][2] ||
        $(this)[0].innerText == myArray[1][3] ||
        $(this)[0].innerText == myArray[2][4] ||
        $(this)[0].innerText == myArray[4][4]) {
        console.log($(this)[0].innerText + " right")
        rightChoice();
        
        userScore += 1;
        // console.log('gj')
        // console.log(userScore);


    } else if ($(this)[0].innerText == myArray[0][2] || $(this)[0].innerText == myArray[0][3] || $(this)[0].innerText == myArray[0][4]) {
        console.log($(this)[0].innerText + " wrong")
        wrongChoice();
        

    } else if ($(this)[0].innerText == myArray[1][1] || $(this)[0].innerText == myArray[1][2] || $(this)[0].innerText == myArray[1][4]){
        console.log($(this)[0].innerText + " wrong")
        wrongChoice();
        
    } else if ($(this)[0].innerText == myArray[2][1] || $(this)[0].innerText == myArray[2][2] || $(this)[0].innerText == myArray[2][3]){
        console.log($(this)[0].innerText + " wrong")
        wrongChoice();
        
    } else if ($(this)[0].innerText == myArray[3][1] || $(this)[0].innerText == myArray[3][3] || $(this)[0].innerText == myArray[3][4]){     
        console.log($(this)[0].innerText + " wrong")
        wrongChoice();
        
    } else if ($(this)[0].innerText == myArray[4][1] || $(this)[0].innerText == myArray[4][2] || $(this)[0].innerText == myArray[4][3]){
        console.log($(this)[0].innerText + " wrong")
        wrongChoice();
        
    }

})

function timerStart() {
    seconds = setInterval(function () {

        timerSec--;
        countdown.textContent = timerSec;

        if (timerSec === 0 || timerSec < 1) {
            clearInterval(seconds);
            alert("You have run out of time. Game over.");
            finalQuestion();
        }

    }, 1000);
}



function rightChoice() {
    correctAns.innerText = "Correct";
    nextQuestion();
}

function wrongChoice() {
    wrongAns.innerText = "Wrong";
    nextQuestion();  
    timerSec -= 10;
    console.log(timerSec);
}

function finalQuestion() {
    //clearInterval(seconds);
    $("#quesBody").text("All Done!");
    document.querySelector(".card-body").append(`Your final score is ${userScore+1}`);
    var para = document.createElement("p");
    para.innerText = "Enter your initials: ";
    document.querySelector(".card-body").appendChild(para);
    var input = document.createElement("input");
    input.className = "inputInit mx-auto text-center";
    document.querySelector(".card-body").appendChild(input);
    var button = document.createElement("button");
    button.className = "submit  allButtons mx-auto text-center"
    button.innerText = "Submit";
    document.querySelector(".card-body").appendChild(button);
    document.querySelector(".button-group").remove();

    $(".submit").on('click', function (){
        submit();
    })
}

var saveInput = document.querySelector(".inputInit");

function submit() {
    event.preventDefault();
    saveInput;
    if (localStorage !== null) {

    //create object with user details * {initials: "" highscore: 0}
    const userObj = {
        initials: document.querySelector('.inputInit').value,
        score: userScore
    }

    //get highscores from localstorage and store in variable
    info = JSON.parse(localStorage.getItem("score")) || [];

    // //set info to existing or empty []
    // info = (existing) ? existing 

    //add new user object
    info.push(userObj);

    localStorage.setItem("score", JSON.stringify(info));

    window.location = viewHighScores;
    console.log(localStorage.getItem("initials"));
    // //create an empty object
    console.log(info.initials);

    
}

}
