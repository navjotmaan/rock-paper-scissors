const choices = ['rock', 'paper', 'scissors'];
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let val = Math.floor(Math.random() * choices.length);
    return choices[val];
}

function getHumanChoice() {
    let ans = prompt('What\'s your choice: Rock, Paper, Scissors?');
    return ans;
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    if(humanChoice === 'rock' && computerChoice === 'scissors' || humanChoice === 'scissors' && computerChoice === 'paper' || humanChoice === 'paper' && computerChoice === 'rock') {
        console.log(`You won! ${humanChoice} beats ${computerChoice}`);
        humanScore++;
    }

        else if(humanChoice === 'rock' && computerChoice === 'paper' || humanChoice === 'scissors' && computerChoice === 'rock' || humanChoice === 'paper' && computerChoice === 'scissors') {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        computerScore++;
        }  

    else{
        console.log("It's a tie!");
    }

}

function playGame(func) {
    for(let i = 1; i <= 5; i++) {
        let human = getHumanChoice();
        let computer= getComputerChoice();
        func(human, computer);
    }
}

playGame(playRound);

console.log(`Your Scores: ${humanScore}, Computer Scores: ${computerScore}`);