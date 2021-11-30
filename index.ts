let wordToguess:string = ""
const wordDisplayBox = document.getElementsByClassName('word-display-box')[0]
const blanksDisplayBox = document.getElementsByClassName('blanks-display-box')[0]
const livesDisplayBox = document.getElementsByClassName('lives-display-box')[0]
const playerKeyboard = document.getElementsByClassName('player-keyboard')[0]
const startBtn = document.getElementsByClassName('start-btn')[0]
const resetBtn = document.getElementsByClassName('reset-btn')[0]
let playerAttempt:string = ""
let lives:number = 10
const livesEmoji:string = `&#127873;`
const winMessage:string = `You Win! &#127881;`
const loseMessage:string = `Game Over. &#128534;`


function createKeyboard():void{
    const unicodeA:number = 97
    const unicodeZ:number = 122

    for(let i=unicodeA; i<=unicodeZ; i++){
        let character = String.fromCharCode(i);
        let letterButton =  document.createElement('button')
        letterButton.innerText = character
        letterButton.className = 'letter-btn'
        letterButton.setAttribute('id', character)
        letterButton.disabled = true
        letterButton.addEventListener('click', handleGuess)
        playerKeyboard.appendChild(letterButton)
    }
}
createKeyboard()

function handleGuess(){
}

function handleStart():void{
    console.log('eho')
}
