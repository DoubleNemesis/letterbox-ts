let wordToGuess = "";
const wordDisplayBox = document.getElementsByClassName('word-display-box')[0];
const blanksDisplayBox = document.getElementsByClassName('blanks-display-box')[0];
const livesDisplayBox = document.getElementsByClassName('lives-display-box')[0];
const playerKeyboard = document.getElementsByClassName('player-keyboard')[0];
const startBtn = document.getElementsByClassName('start-btn')[0];
const resetBtn = document.getElementsByClassName('reset-btn')[0];
let playerAttempt = "";
let lives = 10;
const livesEmoji = `&#127873;`;
const winMessage = `You Win! &#127881;`;
const loseMessage = `Game Over. &#128534;`;
function createKeyboard() {
    const unicodeA = 97;
    const unicodeZ = 122;
    for (let i = unicodeA; i <= unicodeZ; i++) {
        let character = String.fromCharCode(i);
        let letterButton = document.createElement('button');
        letterButton.innerText = character;
        letterButton.className = 'letter-btn';
        letterButton.setAttribute('id', character);
        letterButton.disabled = true;
        letterButton.addEventListener('click', handleGuess);
        playerKeyboard.appendChild(letterButton);
    }
}
createKeyboard();
function handleStart() {
    fetch('https://random-word-api.herokuapp.com/word?number=1&swear=0')
        .then(response => response.json())
        .then(data => {
        console.log(typeof data);
        wordToGuess = data.toString(); // change for testing
        // wordDisplayBox.innerText = wordToGuess
        for (let i = 0; i < wordToGuess.length; i++) {
            playerAttempt += '-';
        }
        blanksDisplayBox.innerText = playerAttempt;
        startBtn.style.display = 'none';
        resetBtn.style.display = 'block';
        // livesDisplayBox.innerText = `${lives} Lives Left`
        renderLivesLeftEmojis();
        const letterButtons = Array.from(document.getElementsByClassName('letter-btn'));
        letterButtons.forEach((letterButton) => {
            letterButton.disabled = false;
        });
    });
}
function handleGuess(e) {
    console.log(e.target.id);
    console.log(e);
    const stringToCheck = e.target.id;
    const targetBtn = document.getElementById(e.target.id);
    targetBtn.classList.add('used');
    targetBtn.disabled = true;
    if (wordToGuess.indexOf(stringToCheck) > -1) {
        for (let i = 0; i < wordToGuess.length; i++) {
            if (stringToCheck === wordToGuess[i]) {
                let playerAttemptArray = playerAttempt.split('');
                playerAttemptArray[i] = stringToCheck;
                playerAttempt = playerAttemptArray.join('');
            }
        }
        // checkWin()
    }
    else {
        lives--;
        // livesDisplayBox.innerText = `${lives} Lives Left`
        renderLivesLeftEmojis();
        // checkLose()
    }
    blanksDisplayBox.innerText = playerAttempt;
}
function renderLivesLeftEmojis() {
}
//# sourceMappingURL=index.js.map