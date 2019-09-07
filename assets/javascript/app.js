// global variables
var correctGuesses = 0;
var wrongGuesses = 0;
var missedGuesses = 0;
var questionsRemain = theQuestions.length;
var timer;
var currentQuestion = 0;
var StartTime = 30;

$('#EndScreen').hide();


//after question is answer or missed move to next question 

$(document).on('click', '.choice', function () {
    clearInterval(timer);
    var chosenAnswer = $(this).attr('data-answer');
    var correctAnswer = theQuestions[currentQuestion].correctAnswer;
    if (chosenAnswer === correctAnswer) {
        correctGuesses++
        nextQuestion();
        console.log('wins');
        
    }
    else {
        wrongGuesses++;
        nextQuestion();
        console.log('losses');
        
    }
        
})


function nextQuestion () {
    var isQuizOver = (theQuestions.length - 1) === currentQuestion;
    if (isQuizOver) {
        finalResults ();        
    }
    else {
    currentQuestion++;
    askQuestion();
}
}


// create 30 second timer

function timeUp () {
    clearInterval(timer);
    missedGuesses++;
    nextQuestion();
}

function countdownTimer () {
    startTime--;
    $('#time').html(startTime)
    if (startTime === 0) {
        timeUp();
    }
    

}


$('.btn').on('click', function (){
    correctGuesses = 0;
    wrongGuesses = 0;
    missedGuesses = 0;
    currentQuestion = 0;
    StartTime = 30;
    askQuestion();
    $('#EndScreen').hide();
    $('#game').show();

});


// display questions in browser

function askQuestion () {
    startTime = 30;
    timer = setInterval(countdownTimer, 1000)
  
    var displayedQuestion = theQuestions[currentQuestion].question;
    var choices = theQuestions[currentQuestion].choices;
    
    $('#time').html(StartTime );
    $('#game').html(`<h3> ${displayedQuestion} </h3>
    ${loadChoices(choices)}
    `);
    
}

function loadChoices (choices){
    var result = '';
    for (var i = 0; i < choices.length; i++){
        result += `<p class="choice" data-answer="${choices[i]}">${choices[i]}</p>`;
    }
    return result;
}

askQuestion();
// loadChoices();
//click on correct question store data

// Final splash screen

function finalResults () {
    $('#game').hide();
    $('#EndScreen').show();
    $('#wins').html("You correctly guessed " + correctGuesses);
    $('#losses').text("You chose poorly " + wrongGuesses + " times");
    $('#undecided').text("You did not pick an answer fast enough " + missedGuesses + " times");
}








