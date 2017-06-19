// This code will run as soon as the page loads
window.onload = function() {
  // alert('JavaScript file - window.onload');
  // restart();

  };


// Variables
// =======================================================
var game = {
  correctAnswerCount: 0,
  incorrectAnswerCount: 0,
  timeCounter: 20,
  // timeCounter: 120;
  // unansweredCount: 0,
  // userAnswer: '',
  countDown: function(){
    game.timeCounter--;
    $('#counter').html(game.timeCounter);
    if (game.timeCounter === 0)
    {
      console.log('out of time');
      game.done();
    }
  }
};

var questions = [
  {
  question: 'Who said, Of all the souls I have encountered in my travels, his was the most....human.',
  answers:[ 'Lt. Worf', 'Mr. Sulu', 'Mr. Spock' ],
  correctAnswer: 'James T. Kirk'
  },

  {
  question: 'Who said, \"We\'re not here to take over. We just want to sell you things.\"',
  answers:[ 'Lt. Worf', 'Mr. Sulu', 'Mr. Spock' ],
  correctAnswer: 'Quark the Ferengi'
  },

  {
  question: 'Having is not so pleasing a thing as wanting, it may not be logical but it is often true.',
  answers:[ 'Mr. Sulu', 'Lt. Uhura', 'Number One' ],
  correctAnswer: 'Mr. Spock'
  },

  {
  question: 'Jim (Captain Kirk), you don\’t go around asking the Almighty for his I.D.!',
  answers:[ 'Lt. Worf', 'Mr. Sulu', 'Mr. Spock' ],
  correctAnswer: 'Dr ‘Bones’ McCoy'
  },

  {
  question: 'I\'m a doctor, not a bricklayer',
  answers:[ 'Lt. Worf', 'Mr. Sulu', 'Mr. Spock' ],
  correctAnswer: 'Dr ‘Bones’ McCoy'
  },

  // {
  // question: '',
  // answers:[ 'Lt. Worf', 'Mr. Sulu', 'Mr. Spock' ],
  // correctAnswer: ''
  // },

  // {
  // question: '',
  // answers:[ 'Lt. Worf', 'Mr. Sulu', 'Mr. Spock' ],
  // correctAnswer: ''
  // },

  // {
  // question: '',
  // answers:[ 'Lt. Worf', 'Mr. Sulu', 'Mr. Spock' ],
  // correctAnswer: ''
  // }

  ];


// // Functions
// // =======================================================

function displayCorrectAnswerCount() {
    alert('This is from the displayCorrectAnswerCount function.');
//   // $(#goal).html.("Goal Number: " + game.goalNumber);
//   $('#goal').html("Goal Number: " + game.goalNumber);
//   // console.log('displayGoalNumber function' + game.goalNumber);
};

function displayIncorrectAnswerCount() {
  alert('This is from the displayCorrectAnswerCount function.');
//   $('#user-number').html("User Number: " + game.userNumber);
//   console.log('displayUserNumber function');
};

function displayIncorrectAnswerCount() {
  alert('This is from the displayUnansweredCount function.');
//   $('#wins').html("Wins: " + game.winsNumber);
//   console.log('displayWins function');
};

 
// function evaluate() {
//   console.log('evaluate function');

//   if (game.goalNumber === game.userNumber) {
//     game.winsNumber++;

//   //display updated score
//   displayWins();
//   alert('You won.');

//   start();
//   }

//   else if (game.userNumber >= game.goalNumber) {
//   game.lossesNumber++;
  
//   //display updated score
//   displayLosses();
//   alert('You lost.');

//   start();
//   }

// };
 
// function start() {
//   console.log('This is from the start function.');
//   game.userNumber = 0,



  // game.correctAnswerCount = 0;
  // game.incorrectAnswerCount = 0;
  // game.unansweredCount = 0;
  // userAnswer: '',
  
//   //reset value of crystal ids
//   game.crystalOneValue = getRandomIntInclusive(1, 12),
//   $('#crystal-1').val(game.crystalOneValue);
//   console.log('#crystal-1 = ' + game.crystalOneValue);

//   displayGoalNumber();

//   displayUserNumber();

//   displayWins();

//   displayLosses();

// };



// <button type="button" class="btn btn-success">answer 1</button>

// <button type="button" class="btn btn-primary" id = "done-button">Done</button>

 
// // Main Process
// // =======================================================

$('#start-button').on('click', function() {
  console.log('You clicked #start-button');

  //after user clicks start button
  $('#start-button').remove();

  for (var i = questions.length - 1; i >= 0; i--) {
    $('#subwrapper').append('<h2>' + questions[i].question + '</h2>');

      for (var j = questions.[i].answers.length - 1; i >= 0; i--) {
        $('#subwrapper').append("<input type = 'radio' name = 'question-" +i + "' value='" +questions[i].answers[j]+"'>"+questions[i].answers[j])

  }


//   game.userNumber = game.userNumber + game.crystalOneValue;
//   displayUserNumber();
//   evaluate();
  });



$('#done-button').on('click', function() {
  console.log('You clicked #done-button');
//   game.userNumber = game.userNumber + game.crystalOneValue;
//   displayUserNumber();
//   evaluate();
  });


this.results();
},

result: function(){
  clearInterval(timer);
  $('#subwrapper h2').remove();

  $('#subwrapper').append('<h3>')

}



// displayGoalNumber();

// displayUserNumber();

// displayWins();

// displayLosses();