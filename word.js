let letter = require('./letter.js')
let wordBank = ['Wonder Woman', 'Poison Ivy', 'Storm', 'Cat Woman', 'Carol Danvers', 'Gamora', 'Rogue'];

function Word () {
    this.letterObjectArray = [];
    this.chosenWord = wordBank[Math.floor(Math.random() * wordBank.length)];

    for (let i = 0; i < this.chosenWord.length; i++) {
        let temp = new letter(this.chosenWord[i]);
        this.letterObjectArray.push(temp);
    }
    console.log('test letterCheck', this.letterObjectArray[2].letterChecker('a'));
}

Word.prototype.print = function() {
    let printWord = '';
    for (let i = 0; this.letterObjectArray.length; i++) {
        printWord += this.letterObjectArray[i] + '';
    }
}

Word.prototype.userChoice = function(input) {
    for (let i = 0; this.letterObjectArray.length; i++) {
        this.letterObjectArray[i].guess(input);
    }
}

module.exports = Word;