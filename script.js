const btn = document.querySelector('#btn');
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
    
    if (humanChoice === computerChoice) {
        showResult.textContent = "It's a tie!";
        return;
    }
    
    const winningRules = {
        rock: 'scissors',
        paper: 'rock',
        scissors: 'paper',
    };

    if (winningRules[humanChoice] === computerChoice) {
        humanScore++;
        showResult.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
    } else {
        computerScore++;
        showResult.textContent = `You lose! ${computerChoiceChoice} beats ${humanChoiceChoice}`;
    }

    showScore.textContent = `Your Scores: ${humanScore}, Computer Scores: ${computerScore}`;

    checkWinner();
}

function checkWinner() {
    if (humanScore === 5) {
        showResult.textContent = '🎉 You are the WINNER!';
    }
    else if (computerScore === 5) {
        showResult.textContent = '💻 Computer is the WINNER!';
    }
}

btn.addEventListener("click", (event) => {
    const human = event.target.id;
    if (!choices.includes(human)) return;

    const computer = getComputerChoice();
    playRound(human, computer);
});