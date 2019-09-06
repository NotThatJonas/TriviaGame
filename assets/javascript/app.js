// global variables
var correctGuesses = 0;
var wrongGuesses = 0;
var missedGuesses = 0;
var questionsRemain = theQuestions.length;
var timer;
var currentQuestion = 0;
var StartTime = 30;

// display questions in browser

function askQuestion () {
    var displayedQuestion = theQuestions[currentQuestion].question;
    var choices = theQuestions[currentQuestion].choices;
    $('#game').html('<h3>' + displayedQuestion + '</h3>');
    $('#time').html('<h3>' + 'Timer: ' + StartTime + '</h3>');
    // var newDiv = $('<div>')
    // newDiv.append(displayedQuestion);
    // newDiv.append(choices);
}

function loadChoices (choices){
    var result = '';
    for (var i = 0; i < choices.length; i++){
        result += '<p class="choice" data-answer="></p>';
    }
    return result;
}

askQuestion();
//click on correct question store data


