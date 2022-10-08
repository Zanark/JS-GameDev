const computerChoiceDisplay = document.getElementById("computer-choice");
const playerChoiceDisplay = document.getElementById("player-choice");
const resultDisplay = document.getElementById("result");

const possibleChoices = document.querySelectorAll('button');

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    let playerChoice = e.target.id;
    playerChoiceDisplay.innerHTML = playerChoice;
    computerChoiceDisplay.innerHTML = function() {
        let randomNumber = Math.floor(Math.random() * 3);
        let picks = ['rock', 'paper', 'scissors'];
        return picks[randomNumber];
    }()  
    if ((computerChoiceDisplay.innerHTML == "rock" && playerChoiceDisplay.innerHTML == "paper") 
    || (computerChoiceDisplay.innerHTML == "scissors" && playerChoiceDisplay.innerHTML == "rock") 
    || (computerChoiceDisplay.innerHTML == "paper" && playerChoiceDisplay.innerHTML == "scissors"))
    {
        resultDisplay.innerHTML = "Player Wins!";
    }
    else if ((computerChoiceDisplay.innerHTML == "paper" && playerChoiceDisplay.innerHTML == "rock") 
    || (computerChoiceDisplay.innerHTML == "rock" && playerChoiceDisplay.innerHTML == "scissors") 
    || (computerChoiceDisplay.innerHTML == "scissors" && playerChoiceDisplay.innerHTML == "paper"))
    {
        resultDisplay.innerHTML = "Computer Wins!";
    }
    else
    {
        resultDisplay.innerHTML = "Its a Tie!";
    }
}))

