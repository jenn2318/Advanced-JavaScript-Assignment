
let Letter = require('./letter.js');
let inquirer = require('inquirer');
let Word = require('./word.js')
//console.log(Letter);


let wordBank = ['Wonder Woman', 'Poison Ivy', 'Storm', 'Cat Woman', 'Carol Danvers', 'Gamora', 'Rogue'];

//this.chosenWord = wordBank[Math.floor(Math.random() * wordBank.length)];
//You need an array for guessed correct and incorrect letters
let correctLetters = [];
let incorrectLetter = [];


//for underscores to appear will be used in a function
let underScore = "_"


// Guesses user has in the game
let guessesLeft = 5;

//randomly selects a word and uses a constructor to store it
// function playGame() {
// let wordChoice = new Word(chosenWord);
// Word.underScoreMake();
// }

//This is to grab a random word
// function grabRandomWord() {
//     let rand = wordBank[Math.floor(Math.random() * wordBank.length)];
//     let randomSelection = wordBank[rand];
//     if(chosenWord.indexOf(randomWord) === -1) {
//       return randomWord;
//     } else {
//     grabRandomWord()
//     gameGuessing();
//     playGame();
//     }
//   }

// function gameGuessing (){
//   if (guessesLeft = 5) {
//         inquirer.prompt([
//             {
//                 type: "input",
//                message: 'Guess a letter:',
//               name: "guess"
//            }
//     ]).then(function(answer){
//            letterValidate = this.letterChecker(guess);
//         if (guessesLeft === 0) {
               //console.log('');
//                 console.log("Youre guesses were incorrect" + ansewer.guessedLetter + "Try Again!");
//                 guessesLeft--;
//             } else {
//         console.log(this.letterChecker);
            
//             if (guesses > 0 && correct) {
//                 letterValidate = this.letterChecker(guess);
//                //console.log('');
//                 console.log("Your guess is correct"+ answer.guessesLetter + "Good Job!");
//                 inquire();
//             } else {
//                console.log("GuessesLeft" + guessesLeft);      
               
//         } console.log(answers);
//          inquirer();
//     }
    
//  });

