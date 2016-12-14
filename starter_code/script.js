var generateComputerChoice = function () {
    let options = ['rock', 'paper', 'scissors'];
    let randomIndex = Math.floor(Math.random() * 2);
    return options[randomIndex];
};

var pickWinner = function (userChoice, computerChoice) {
    console.log("user choice: " + userChoice);
    console.log("computer choice: " + computerChoice);
    let result = 'draw';
    if (userChoice === 'rock' && computerChoice === 'paper') {
        result = 'computer wins';
    }
    else if (userChoice === 'rock' && computerChoice === 'scissors') {
        result = 'user wins';
    }
    else if (userChoice === 'paper' && computerChoice === 'rock') {
        result = 'user wins';
    }
    else if (userChoice === 'paper' && computerChoice === 'scissors') {
        result = 'computer wins';
    }
    else if (userChoice === 'scissors' && computerChoice === 'rock') {
        result = 'computer wins';
    }
    else if (userChoice === 'scissors' && computerChoice === 'paper') {
        result = 'user wins';
    }
    console.log(result);
    $('#computer-choice').text(computerChoice);
    $('#winner').text(result);
};

/* DOCUMENT READY: Everything inside this function will happen after
   the user's browser has finished loading the webpage. */
$(document).ready(function() {
    $('.choice').click((event) => {
        var computerChoice = generateComputerChoice();
        var userChoice = $(event.target).text();
        pickWinner(userChoice, computerChoice);
    });
});
