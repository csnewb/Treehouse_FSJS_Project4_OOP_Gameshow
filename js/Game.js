/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */





class Game {
    constructor() {
        this.missed = 0;
        this.phrases = [];
        this.activePhrase = null;

        // initialize the phrase array
        const phrase_pool = [
            "The cat sat on the mat",
            "A dog barks loudly",
            "Jump over the moon",
            "The sun is shining bright",
            "Rain falls from the sky",
            "Eat your vegetables",
            "Sleep early at night",
            "Birds fly in the sky",
            "Fish swim in the sea",
            "Plant a tree for shade",
            "Brush your teeth daily",
            "The bee buzzes around",
            "A frog leaps in the pond",
            "Wind blows the leaves",
            "Snow falls in winter",
            "A fox is very sly",
            "Wear your warm coat",
            "Drive a car carefully",
            "The owl hoots at night",
            "Read a book every day"
        ];

        phrase_pool.forEach((phrase_text) => {
            let phrase_obj = new Phrase(phrase_text)
            this.phrases.push(phrase_obj)
        });




    }


    startGame(){
        // remove the start screen
        const overlay = document.getElementById('overlay')
        overlay.style.display = 'none';

        // Old code for debugging/reference
        // get a phrase to start the game
        // let random_phrase = this.getRandomPhrase()
        // console.log(random_phrase)
        //
        // // instantiate phrase with the Phrase class
        // phrase = new Phrase(random_phrase)


        phrase = this.getRandomPhrase()
        console.log(phrase)

        // assign the actual phrase to activePhrase for future reference
        this.activePhrase = phrase.phrase

        // call the function to display the phrase on the screen
        phrase.addPhraseToDisplay()


    }


    getRandomPhrase() {
        //this method randomly retrieves one of the phrases stored in the this.phrases array and returns it.
        // const randomIndex = Math.floor(Math.random() * this.phrases.length);
        // return this.phrases[randomIndex];

        //this method randomly retrieves one of the phrases stored in the this.phrases array and returns it.
        const randomIndex = Math.floor(Math.random() * this.phrases.length);
        return this.phrases[randomIndex];
    }


    handleInteraction(button){
        // getting the player choice as a string
        let player_choice = button.innerHTML
        console.log(`button clicked: ${player_choice}`)

        // check if the player's choice is a correct letter and assign it to a boolean variable
        let correct_guess = phrase.checkLetter(player_choice)

        // regardless, we want to disable the button
        button.disabled = true;

        // CORRECT GUESS
        if (correct_guess){
            console.log(`correct guess`)

            // update the clas for styling and then call the function to display the matched letter
            button.className += ' chosen'
            phrase.showMatchedLetter(player_choice)

            // check to see if the player has matched all letters
            this.checkForWin()
        }
        // INCORRECT GUESS
        else {
            console.log(`INCORRECT guess`)
            // update the clas for styling and remove a life, which will also check for gameover
            button.className += ' wrong'
            this.removeLife()
        }

    }

    removeLife() {
        console.log(`this.missed: ${this.missed}`)

        // increment the value tracking the total number of missed guesses
        this.missed += 1;

        // iterate through the hearts and change the image basd on the number of current missed guesses
        // NOTE: this may not be necessary and we could likely just update only tries[this.missed + 1] (account for 0),
        // but I feel like this is a foolproof way to make sure hearts will always correctly display
        for (let i = 0; i < this.missed; i++) {
            tries[i].firstChild.src = "images/lostHeart.png"; // Note: use 'src', not 'source'
        }

        // check to see if the new total of missed guesses equals 5 and end the game if it does
        if (this.missed === 5) {
            this.gameOver('lose')
        }


    }


    checkForWin() {
        const letters = document.getElementsByClassName('letter');
        let all_found = true;

        // Check if any letter elements still have the 'hide' class
        Array.from(letters).forEach((letter)=>{
            if (letter.classList.contains('hide')) {
                all_found = false;
                return false
            }
         })

        // The default value of all_found is true, and it is only updated if an element still contains 'hide'
        if (all_found){
            this.gameOver('win')
        }

    }

    gameOver(outcome) {
        // outcome can either be 'win' or 'lose'
        console.log("GAME OVER")

        // replace the start screen to end the game
        const overlay = document.getElementById('overlay')
        overlay.style.display = 'flex';

        // update the classname to modify the styling of the page based on outcome (win or lose)
        overlay.className = outcome
        resetGameBoard()
    }



}