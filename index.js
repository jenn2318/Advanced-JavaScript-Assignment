
let Letter = require('./letter.js');
let inquirer = require('inquirer');
let Word = require('./word.js')
//console.log(Letter);



//You need an array for guessed correct and incorrect letters
var correctLetters = [];
var incorrectLetter = [];

var underScore = [];


function getWord () {
    let randomWord = wordBank[Math.floor(Math.random() * wordBank.length)];
       if (guess.indexOf(randomWord) === -1) {
           guess.push(randomWord);
           return randomWord;
       } else {
           getWord ();
       }
}

function underScores (){
    underScore = [];
    for (var i = 0; i < randomWord.length; i++) {
        underScore.push ('_');
    }
}

function goodGuess(ltr){
  underScore[randomWord.indexOf(Letter.prototype.characterDisplay)] = ltr;
    console.log(underScore);
}
      

function prompt () {
    inquirer.prompt([
        {
            type: 'input',
            message: 'Guess a letter',
            name: 'letterGuess'
        }
    ]).then(answers => {
        console.log(answers);
    })
}

//prompt();
startGame();

function startGame () {
    let word = new Word ();
    prompt();
    underScores();
    getWord();
}