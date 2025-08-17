const btnRock = document.querySelector('#rock');
const btnPaper = document.querySelector('#paper');
const btnScissors = document.querySelector('#scissors');

const showResult = document.querySelector('#showResult');
const showScore = document.querySelector('#showScore');

const choices = ['rock', 'paper', 'scissors'];
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let val = Math.floor(Math.random() * choices.length);
    return choices[val];
}

function playRound(humanChoice, computerChoice) {
    computerChoice = computerChoice.toLowerCase();

    if(humanChoice === 'rock' && computerChoice === 'scissors' || humanChoice === 'scissors' && computerChoice === 'paper' || humanChoice === 'paper' && computerChoice === 'rock') {
        showResult.textContent = `${humanChoice} beats ${computerChoice}`;
        humanScore++;
    }

    else if(humanChoice === 'rock' && computerChoice === 'paper' || humanChoice === 'scissors' && computerChoice === 'rock' || humanChoice === 'paper' && computerChoice === 'scissors') {
        showResult.textContent = `${computerChoice} beats ${humanChoice}`;
        computerScore++;
        }  

    else{
        showResult.textContent = "It's a tie!";
    }

    
    if (humanScore === 5) {
        showResult.textContent = 'You are the WINNER!';
    }

    if (computerScore === 5) {
        showResult.textContent = 'Computer is the WINNER!';
    }
}


btnRock.addEventListener("click", () => {
    const computer = getComputerChoice();
    playRound('rock', computer);
    showScore.textContent = `Your Scores: ${humanScore}, Computer Scores: ${computerScore}`;
});

btnPaper.addEventListener("click", () => {
    const computer = getComputerChoice();
    playRound('paper', computer);
    showScore.textContent = `Your Scores: ${humanScore}, Computer Scores: ${computerScore}`;
});

btnScissors.addEventListener("click", () => {
    const computer = getComputerChoice();
    playRound('scissors', computer);
    showScore.textContent = `Your Scores: ${humanScore}, Computer Scores: ${computerScore}`;
});









