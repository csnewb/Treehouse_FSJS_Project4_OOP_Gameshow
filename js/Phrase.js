/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();

        // console.log(this.phrase)
    }



    addPhraseToDisplay(){
        const phrase_div = document.getElementById('phrase')

        // we split the string out so we can iterate through each character
        this.phrase.split('').forEach((character) => {
            // here we check for blank spaces
            if (character === ' ') {
                phrase_div.innerHTML += `<li class="space"> </li>`
            }
            // here we check to make sure the phrase contains letters
            else if (character.match(/[a-zA-Z]/)){
                phrase_div.innerHTML += `<li class="hide letter ${character}">${character}</li>`
            }
            // we dont have more robust error handling if the phrase contains a number or special character
            else {
                console.log("The phrase contains invalid characters")
            }

        });

    }


    checkLetter(player_choice){
        // this is a helper function to check if the selected button corresponds with a letter in the phrase
        if (this.phrase.includes(player_choice)) {
            return true
        }
        else {
            return false
        }
    }

    showMatchedLetter(player_choice){
        console.log('Showing Matched Letters')
        const letters = document.getElementsByClassName('letter')

        // We iterate through the letters and see if they match the player choice and if so we update their class
        Array.from(letters).forEach((letter)=>{
            if (letter.classList.contains(player_choice)) {
                letter.classList.remove('hide');
                letter.classList.add('show');
            }
        })

    }


}