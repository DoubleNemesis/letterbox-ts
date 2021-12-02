let wordToGuess:string = ""
const wordDisplayBox = document.getElementsByClassName('word-display-box')[0] as HTMLElement
const blanksDisplayBox = document.getElementsByClassName('blanks-display-box')[0] as HTMLElement
const livesDisplayBox = document.getElementsByClassName('lives-display-box')[0] as HTMLElement
const playerKeyboard = document.getElementsByClassName('player-keyboard')[0] as HTMLElement
const startBtn = document.getElementsByClassName('start-btn')[0] as HTMLElement
const resetBtn = document.getElementsByClassName('reset-btn')[0] as HTMLElement
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

function handleStart():void{
    fetch('https://random-word-api.herokuapp.com/word?number=1&swear=0')
    .then(response => response.json())
    .then(data => {
        console.log(typeof data)      
        wordToGuess = data.toString()  // change for testing
        // wordDisplayBox.innerText = wordToGuess
        for (let i = 0; i < wordToGuess.length; i++) {
            playerAttempt += '-'
        }
        blanksDisplayBox.innerText = playerAttempt
        startBtn.style.display = 'none'
        resetBtn.style.display = 'block'
        // livesDisplayBox.innerText = `${lives} Lives Left`
        renderLivesLeftEmojis()
        const letterButtons = Array.from(document.getElementsByClassName('letter-btn') as HTMLCollection)
        letterButtons.forEach((letterButton)=>{
            (letterButton as HTMLInputElement).disabled = false
        })
    })
}

function handleGuess(e:PointerEvent):void{
    console.log((<HTMLButtonElement>e.target).id) 
    console.log(e) 
    const stringToCheck:string = (<HTMLButtonElement>e.target).id
    const targetBtn:HTMLInputElement = document.getElementById((<HTMLButtonElement>e.target).id) as HTMLInputElement
    targetBtn.classList.add('used')
    targetBtn.disabled = true
    if (wordToGuess.indexOf(stringToCheck) > -1) {
        for (let i = 0; i < wordToGuess.length; i++) {
            if (stringToCheck === wordToGuess[i]) {
                let playerAttemptArray = playerAttempt.split('')
                playerAttemptArray[i] = stringToCheck
                playerAttempt = playerAttemptArray.join('')
            }
        }
        // checkWin()
    }
    else {
        lives--
        // livesDisplayBox.innerText = `${lives} Lives Left`
        renderLivesLeftEmojis()
        // checkLose()
    }
    blanksDisplayBox.innerText = playerAttempt
}


function renderLivesLeftEmojis(){

}