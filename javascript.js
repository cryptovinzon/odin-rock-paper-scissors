// lets computer chooses a hand
function computerPlay(){
    const hands = ['Rock', 'Paper', 'Scissors'];
    return hands[Math.floor(Math.random()*3)];
}

// initiate round
function playRound(playerSelection, computerSelection){
    if (playerSelection === 'rock'){
        if (computerSelection === 'Scissors'){
            alert('You win! Rock beats Scissors');
        } else if (computerSelection === 'Paper') {
            alert('You lose! Paper beats Rock');
        } else {
            alert('It\'s a draw!');
        }
    } else if (playerSelection === 'paper'){
        if (computerSelection === 'Rock'){
            alert('You win! Paper beats Rock');
        } else if (computerSelection === 'Scissors') {
            alert('You lose! Scissors beats paper');
        } else {
            alert('It\'s a draw!');
        }
    } else if (playerSelection === 'scissors'){
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

function game(){
    for (let i = 0; i < 5; i++){
        playerSelection = prompt('Choose your hand!');
        playRound(playerSelection, computerPlay());
    }
}