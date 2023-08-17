/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */


const btn__reset = document.getElementById('btn__reset')
const keys = document.getElementsByClassName('key')
const qwerty = document.getElementById('qwerty')
const phrase_div = document.getElementById('phrase')
const scoreboard = document.getElementById('scoreboard')
const tries = document.getElementsByClassName('tries')


let game; // Declare the game variable in the outer scope
let phrase;

// set an event listener for the start button
btn__reset.addEventListener('click', (e) => {

    // instantiate a new game
    // note that game is defined in global scope so it will be accessible to all functions
    game = new Game();
    game.startGame();
});

qwerty.addEventListener('click', (e) => {
    // check if any click events are only on buttons with class 'key'
    if (e.target.classList.contains('key')) {
        game.handleInteraction(e.target)
    }
});

function resetGameBoard(){
    // remove all the letters by restoring the inner html to just empty ul tags
    phrase_div.innerHTML = "<ul></ul>"

    // restore the original state of each of the keys aka buttons
    Array.from(keys).forEach((key) => {
        key.className = 'key';
        key.disabled = false;
    });

    // restore the original state of each of the heart images
    Array.from(tries).forEach((tries_ea)=> {
        tries_ea.firstChild.src = "images/liveHeart.png";
    });
}