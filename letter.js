
function Letter (word) {
    this.letter = word;
    this.letterGuessed = false;
    
    //console.log(this.letter);
    this.characterDisplay = function (){
        if (this.letter === true){
            return this.character;
            console.log(this.character);
           // console.log(characterDisplay);
        } else {
          return "-"
        }
    }
    this.letterChecker = function (guess) {
        if (guess === this.letter) {
            this.letterGuessed = true;
           // console.log(this.letterChecker);
            console.log(guess);
        } else {
            this.letterGuessed = false;
        }
    }
};



module.exports = Letter;