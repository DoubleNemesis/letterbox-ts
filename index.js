var wordToguess = "";
var wordDisplayBox = document.getElementsByClassName('word-display-box')[0];
var blanksDisplayBox = document.getElementsByClassName('blanks-display-box')[0];
var livesDisplayBox = document.getElementsByClassName('lives-display-box')[0];
var playerKeyboard = document.getElementsByClassName('player-keyboard')[0];
var startBtn = document.getElementsByClassName('start-btn')[0];
var resetBtn = document.getElementsByClassName('reset-btn')[0];
var playerAttempt = "";
var lives = 10;
var livesEmoji = "&#127873;";
var winMessage = "You Win! &#127881;";
var loseMessage = "Game Over. &#128534;";
function createKeyboard() {
    var unicodeA = 97;
    var unicodeZ = 122;
    for (var i = unicodeA; i <= unicodeZ; i++) {
        var character = String.fromCharCode(i);
        var letterButton = document.createElement('button');
        letterButton.innerText = character;
        letterButton.className = 'letter-btn';
        letterButton.setAttribute('id', character);
        letterButton.disabled = true;
        letterButton.addEventListener('click', handleGuess);
        playerKeyboard.appendChild(letterButton);
    }
}
createKeyboard();
function handleGuess() {
}
function handleStart() {
    console.log('eho');
}
