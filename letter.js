
function Letter (word) {
    this.letter = word;
    this.letterGuessed = false;
    //
    console.log(this.letter);
    this.characterDisplay = function (){
        if (this.letter === true){
            return this.character;
        } else {
          return "-"
        }
    }
    this.letterChecker = function (guess) {
        if (guess === this.letter) {
            this.letterGuessed = true;
        } else {
            this.letterGuessed = false;
        }
    }
};



module.exports = Letter;