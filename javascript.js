const hands = ['Rock', 'Paper', 'Scissors'];
let playerSelection;
let computerSelection;


// chooses an index, returns index String
function computerPlay(){
    computerChoice = Math.floor(Math.random()*3);
    computerSelection = hands[computerChoice];
    console.log(computerSelection);
}

// initiate round
function playRound(){
    computerPlay();
    playerSelection = prompt('Choose your hand!').toLowerCase();
    if (playerSelection === 'rock'){
        if (computerSelection === 'Scissors'){
            alert('You win! Rock beats Scissors');
        } else if (computerSelection === 'Paper') {
            alert('You lose! Paper beats Rock');
        } else {
            alert('It\'s a draw!');
        }
        }
    if (playerSelection === 'paper'){
        if (computerSelection === 'Rock'){
            alert('You win! Paper beats Rock');
        } else if (computerSelection === 'Scissors') {
            alert('You lose! Scissors beats paper');
        } else {
            alert('It\'s a draw!');
        }
    }
    if (playerSelection === 'scissors'){
        if (computerSelection === 'Paper'){
            alert('You win! Scissors beats Paper');
        } else if (computerSelection === 'Rock') {
            alert('You lose! Rock beats Scissors');
        } else {
            alert('It\'s a draw!');
        }
    } else {
        alert('Incorrect hand!')
    }

}