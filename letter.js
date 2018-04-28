
function Letter (word) {
    this.letter = word;
    this.letterGuessed = false;
};

Letter.prototype.characterDisplay = function() {
    if (this.letter === true){
        return this.letter;
    } else {
      return "-"
    }
}

Letter.prototype.letterChecker = function(guess) {
    if (guess === this.letter) {
        this.letterGuessed = true;
    } else {
        this.letterGuessed = false;
    }
    
    return this.letterGuessed;
    console.log(this.letterGuessed);
}


module.exports = Letter;


