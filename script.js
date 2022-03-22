const rockButton = document.getElementById('rockButton');
const paperButton = document.getElementById('paperButton');
const scissorsButton = document.getElementById('scissorsButton');
const results = document.getElementById('results');
rockButton.addEventListener("click", gameRock);
paperButton.addEventListener("click", gamePaper);
scissorsButton.addEventListener("click", gameScissors);
score = document.getElementById('score');
let computerScore = 0;
let playerScore = 0;
let options = ['rock', 'paper', 'scissors'];
const buttons = document.getElementById('buttons');


function computerPlay() {
    number = Math.floor (Math.random() * 3);
    choice = options[number]
    return choice
}


function playRound(playerChoice){
    computerChoice = computerPlay();
    if (playerChoice == 'rock' && computerChoice == 'paper') {
        computerScore++;
        return `You choose ${playerChoice} against ${computerChoice}. You lost!`
    } else if (playerChoice == 'rock' && computerChoice == 'scissors') {
        playerScore++;
        return `You choose ${playerChoice} against ${computerChoice}. You won!`
    } else if (playerChoice == 'paper' && computerChoice == 'rock') {
        playerScore++;
        return `You choose ${playerChoice} against ${computerChoice}. You won!`
    } else if (playerChoice == 'paper' && computerChoice == 'scissors') {
        computerScore++;
        return `You choose ${playerChoice} against ${computerChoice}. You lost!`
    } else if (playerChoice == 'scissors' && computerChoice == 'paper') {
        playerScore++;
        return `You choose ${playerChoice} against ${computerChoice}. You won!`
    } else if (playerChoice == 'scissors' && computerChoice == 'rock') {
        computerScore++;
        return `You choose ${playerChoice} against ${computerChoice}. You lost!`
    } else {
        return `You choose ${playerChoice} against ${computerChoice}. It's a tie!`
    }



}
function game(){
    msg = playRound(playerChoice);
    const content = document.createElement('p');
    content.textContent = msg;
    results.appendChild(content);
    score.innerText = `Player ${playerScore} x ${computerScore} Computer`
}

function endGame() {
    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorsButton.disabled = true;
    const content = document.createElement('div');
    const content1 = document.createElement('button');
    content1.setAttribute('id', 'restartButton');
    content1.textContent = 'Restart';
    content.appendChild(content1);
    score.appendChild(content);
    
    document.getElementById('restartButton').addEventListener("click", restart);
  
}

function restart() {
    window.location.reload();
}

function isGameOver(){
    if (playerScore === 5 || computerScore === 5) {
        score.innerText = `Game Over. Player ${playerScore} x ${computerScore} Computer`
        endGame();
    }
}

function gameRock(){
    playerChoice = 'rock';
    game();
    isGameOver();
    
}

function gamePaper(){
    playerChoice = 'paper';
    game();
    isGameOver();
}
function gameScissors(){
    playerChoice = 'scissors';
    game();
    isGameOver();
}

