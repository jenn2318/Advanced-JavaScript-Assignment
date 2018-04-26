var letter = require('./letter.js')
var inquirer = require("inquirer");

var wordBank = ['Wonder Woman', 'Poison Ivy', 'Storm', 'Cat Woman', 'Carol Danvers', 'Gamora', 'Rogue'];


function wordInPlay () {
    this.letterObjectArray = [];
        for (var i = 0; i < this.letterObjectArray.length; i++) {
            var letterChosen = new Letter (answer[i]);
            thus.letterObejectArray.push(letter);
}

this.print = function () {
    printWord = '';
        for (var i = 0; this.letterObjectArray.length; i++) {
            printWord += this.letterObjectArray[i] + '';
        }
    console.log(printWord + "\n");
}
 
this.userChoice = function (input) {
        for (var i = 0; this.letterObjectArray.length; i++) {
            this.letterObjectArray[i].guess(input);
        }
}