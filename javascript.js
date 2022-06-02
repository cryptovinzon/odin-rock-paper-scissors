let playerWins = 0;
let computerWins = 0;
let draws = 0;

// lets computer chooses a hand
function computerPlay(){
    const hands = ['rock', 'paper', 'scissors'];
    return hands[Math.floor(Math.random()*3)];
}

// initiate round
function playRound(playerSelection, computerSelection){
    let msg =''
    if (playerSelection === computerSelection){
        ++draws;
        msg = 'It\'s a draw!';
        } else if (playerSelection === 'rock'){
            if (computerSelection === 'scissors'){
                ++playerWins;
                msg = 'You win! Rock beats Scissors';
                } else if (computerSelection === 'paper') {
                ++computerWins;
                msg = 'You lose! Paper beats Rock';
                }
        } else if (playerSelection === 'paper'){
            if (computerSelection === 'rock'){
                ++playerWins;
                msg = 'You win! Paper beats Rock';
        } else if (computerSelection === 'scissors') {
                ++computerWins;
                msg = 'You lose! Scissors beats paper';
                }
        } else if (playerSelection === 'scissors'){
            if (computerSelection === 'paper'){
                ++playerWins;
                msg = 'You win! Scissors beats Paper';
                } else if (computerSelection === 'rock') {
                ++computerWins;
                msg = 'You lose! Rock beats scissors';
                }
        }
    showResult(msg, playerWins, computerWins, draws); // showResult after round played
}

function showResult(result, player, computer, draws){
    const results = document.querySelector('#results');
    const content = document.createElement('div');

    content.textContent = `Result: ${result} | You: ${player} Computer: ${computer} Draws: ${draws}`;
    results.appendChild(content);

    if (player === 5 || computer === 5){
        announceWinner(player, computer); 
    }
}

function announceWinner(player, computer) {
    const winner = document.createElement('h2')
    if (player === 5) {
        winner.textContent = 'You won!';
        } else if (computer === 5) {
        winner.textContent = 'Computer wins!';
        }
    results.appendChild(winner);
    // reset game
    playerWins = 0;
    computerWins = 0;
    draws = 0;
}

// listen for clicks
const choices = document.querySelectorAll('button');
choices.forEach((button) => {
    button.addEventListener('click', () => {
        playRound(button.id, computerPlay()); // pass button id & computer's hand arguments to playRound
    });
})


/* initiate 5 round game of rock paper scissors
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
}*/