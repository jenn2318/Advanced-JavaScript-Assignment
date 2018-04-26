
function Letter (word) {
    this.letter = letterChosen;
    this.letterGuessed = false;
    this.characterDisplay = function (){
        if (this.letter === true){
            return this.character;
        } else {
          return "-"
        }
    }
};

this.letterChecker = function (guess) {
    if (guess === this.letter) {
        this.letterGuessed = true;
    } else {
        this.letterGuessed = false;
    }
  }

module.exports = Letter;