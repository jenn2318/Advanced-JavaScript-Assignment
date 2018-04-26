
function Letter () {
    this.character = letterChosen;
    this.show = false;
    this.characterDisplay = function (){
        if (this.appear === true){
            return this.character;
        } else {
          return "-"
        }
    }
};

exports.Letter = Letter;