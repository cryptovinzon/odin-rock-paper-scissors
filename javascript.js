let playerWins = 0;
let computerWins = 0;
let draws = 0;

// lets computer chooses a hand
function computerPlay(){
    const hands = ['Rock', 'Paper', 'Scissors'];
    return hands[Math.floor(Math.random()*3)];
}

// initiate round
function playRound(playerSelection, computerSelection){
    if (playerSelection === 'rock'){
        if (computerSelection === 'Scissors'){
            ++playerWins;
            alert('You win! Rock beats Scissors');
        } else if (computerSelection === 'Paper') {
            ++computerWins;
            alert('You lose! Paper beats Rock');
        } else {
            ++draws;
            alert('It\'s a draw!');
        }
    } else if (playerSelection === 'paper'){
        if (computerSelection === 'Rock'){
            alert('You win! Paper beats Rock');
            ++playerWins;
        } else if (computerSelection === 'Scissors') {
            ++computerWins;
            alert('You lose! Scissors beats paper');
        } else {
            ++draws;
            alert('It\'s a draw!');
        }
    } else if (playerSelection === 'scissors'){
        if (computerSelection === 'Paper'){
            alert('You win! Scissors beats Paper');
            ++playerWins;
        } else if (computerSelection === 'Rock') {
            ++computerWins;
            alert('You lose! Rock beats Scissors');
        } else {
            ++draws;
            alert('It\'s a draw!');
        }
    } else {
        alert('Incorrect hand!')
    }
}

// initiate 5 round game of rock paper scissors
function game(){
    for (let i = 0; i < 5; i++){
        playerSelection = prompt('Choose your hand!').toLowerCase();
        playRound(playerSelection, computerPlay());
        console.log('player: ' + playerWins + ' computer: ' + computerWins + ' draws: ' + draws);
    }
    if (playerWins > computerWins){
        console.log('Congrats! You\'ve won!');
    } else if (playerWins < computerWins){
        console.log('Boo, you lost!');
    } else {
        console.log('It\'s a tie!');
    }
}