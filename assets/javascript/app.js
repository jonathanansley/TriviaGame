// This code will run as soon as the page loads
window.onload = function() {
  // alert('Would you like to play a game? - window.onload');
  restart();
  };


// Variables
// =======================================================
var game = {
  winsNumber: 0,
  lossesNumber: 0,
  crystalOneValue: getRandomIntInclusive(1, 12),
  crystalTwoValue: getRandomIntInclusive(1, 12),
  crystalThreeValue: getRandomIntInclusive(1, 12),
  crystalFourValue: getRandomIntInclusive(1, 12),
  goalNumber: getRandomIntInclusive(19, 120),
  userNumber: 0,
};

// Functions
// =======================================================

function displayGoalNumber() {
  // $(#goal).html.("Goal Number: " + game.goalNumber);
  $('#goal').html("Goal Number: " + game.goalNumber);
  // console.log('displayGoalNumber function' + game.goalNumber);
}

function displayUserNumber() {
  $('#user-number').html("User Number: " + game.userNumber);
  console.log('displayUserNumber function');
}

function displayWins() {
  $('#wins').html("Wins: " + game.winsNumber);
  console.log('displayWins function');
}

function displayLosses() {
  $('#losses').html("Losses: " + game.lossesNumber);
  console.log('displayLosses function');
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
  console.log('getRandomIntInclusive function');
}
 
function evaluate() {
  console.log('evaluate function');

  if (game.goalNumber === game.userNumber) {
    game.winsNumber++;

  //display updated score
  displayWins();
  alert('You won.');

  restart();
  }

  else if (game.userNumber >= game.goalNumber) {
  game.lossesNumber++;
  
  //display updated score
  displayLosses();
  alert('You lost.');

  restart();
  }

};
 
function restart() {
  console.log('This is from the restart function.');
  game.goalNumber = getRandomIntInclusive(19, 120),
  game.userNumber = 0,
  
  //reset value of crystal ids
  game.crystalOneValue = getRandomIntInclusive(1, 12),
  $('#crystal-1').val(game.crystalOneValue);
  console.log('#crystal-1 = ' + game.crystalOneValue);

  game.crystalTwoValue = getRandomIntInclusive(1, 12),
  $('#crystal-2').val(game.crystalTwoValue);
  console.log('#crystal-2 = ' + game.crystalTwoValue);

  game.crystalThreeValue = getRandomIntInclusive(1, 12);
  $('#crystal-3').val(game.crystalThreeValue);
  console.log('#crystal-3 = ' + game.crystalThreeValue);

  $('#crystal-4').val(game.crystalFourValue);
  console.log('#crystal-4 = ' + game.crystalFourValue);
  game.crystalFourValue = getRandomIntInclusive(1, 12);

  displayGoalNumber();

  displayUserNumber();

  displayWins();

  displayLosses();

};
 
// Main Process
// =======================================================

$('#crystal-1').click(function() {
  console.log('You clicked crystal-1');
  game.userNumber = game.userNumber + game.crystalOneValue;
  displayUserNumber();
  evaluate();
  });

$('#crystal-2').click(function() {
  console.log('You clicked crystal-2');
  game.userNumber = game.userNumber + game.crystalTwoValue;
  displayUserNumber();
  evaluate();
  });

$('#crystal-3').click(function() {
  console.log('You clicked crystal-3');
  game.userNumber = game.userNumber + game.crystalThreeValue;
  displayUserNumber();
  evaluate();
  });

$('#crystal-4').click(function() {
  console.log('You clicked crystal-4');
  game.userNumber = game.userNumber + game.crystalFourValue;
  displayUserNumber();
  evaluate();
  });

displayGoalNumber();

displayUserNumber();

displayWins();

displayLosses();