let letter = require('./letter.js')
let inquirer = require("inquirer");

let wordBank = ['Wonder Woman', 'Poison Ivy', 'Storm', 'Cat Woman', 'Carol Danvers', 'Gamora', 'Rogue'];



function Word () {
    this.letterObjectArray = [];
    this.chosenWord = wordBank[Math.floor(Math.random() * wordBank.length)];

   // console.log(this.chosenWord);

    for (let i = 0; i < this.chosenWord.length; i++) {
      //  let letterChosen = new Letter(answer[i]);
       // this.letterObjectArray.push(letter);
      // console.log(this.chosenWord[i]);
      this.letterObjectArray.push(new letter(this.chosenWord[i]));
    }
    // console.log(this.letterObjectArray);
    console.log(this.letterObjectArray[2].letterChecker('a'));

    this.print = function () {
       let printWord = '';
        for (let i = 0; this.letterObjectArray.length; i++) {
            printWord += this.letterObjectArray[i] + '';
        }
        // console.log(printWord + "\n");
    }

    this.userChoice = function (input) {
        for (let i = 0; this.letterObjectArray.length; i++) {
            this.letterObjectArray[i].guess(input);
        }
    }
}

module.exports = Word;
