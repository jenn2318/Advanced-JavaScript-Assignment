
let Letter = require('./letter.js');
let inquirer = require('inquirer');
let Word = require('./word.js')
//console.log(Letter);

//var wordBank = ['Wonder Woman', 'Poison Ivy', 'Storm', 'Cat Woman', 'Carol Danvers', 'Gamora', 'Rogue'];
//choose random word for the game
//var chosenWord = wordBank[Math.floor(Math.random() * wordBank.length)];
//console.log(chosen);

//You need an array for guessed correct and incorrect letters
var correctLetters = [];
var incorrectLetter = [];

var underScore = [];

//puts chosen word into the constructor
//var yourWord = new Letter(chosen);
//console.log(chosen);
//console.log(yourWord.underscore());

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

//function goodGuess(ltr){
  //  underScore[randomWord.indexOf(this.letter)] = ltr;
    //console.log(underScore);
  //}
      

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
}