function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3 ) + 1 //get a random number from 1-3
    
    switch (computerChoice) {
        case 1:
            return "rock";
            break;
        case 2:
            return "paper";
            break;
        case 3:
            return "scissors";
            break;
    }//to let the computer choose rock paper or scissors based on the random number 
}


function playRound() {
    const computer = getComputerChoice();
    const player = playerChoice;

    let Winner;
    let Tie;

    if(computer === player){
        alert("It's a tie, try again")
        return Tie = "tie"
    }else if(computer == "rock" && player == "scissors"){
        return Winner = "computer"
    }else if(computer == "paper" && player == "rock"){
        return Winner = "computer"
    }else if(computer == "scissors" && player == "paper"){
        return Winner = "computer"
    }else if(player == "rock" && computer == "scissors"){
        return Winner = "player"
    }else if(player == "paper" && computer == "rock"){
        return Winner = "player"
    }else if(player == "scissors" && computer == "paper"){
        return Winner = "player"
    }//see who wins at the game by evaluating the computer and the player choices
}

let playerChoice;
function getPlayerChoice(){

    const buttons = document.querySelectorAll(".pick");
    
    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            // alert(button.id);
            playerChoice = button.id;
             round = playRound();
            evaluate()
        })
    })
}
getPlayerChoice()

let round ;

let playerCounter = 0;
let computerCounter = 0;
function evaluate(){

        if (round == "tie" ){ //evaluate who wins
            console.log("it's a tie")
        }else if (round == "player"){
            playerCounter++ // add 1 to the counter if player wins
        }else if (round = "counter"){
            computerCounter++ // add 1 to thr counter if computer wins
        }

        score.innerHTML =(`computer: ${computerCounter} player: ${playerCounter}`);

        if(playerCounter == 5){
            alert("Player Wins.");
            location.reload()
        }else if(computerCounter == 5){
            alert("Computer Wins.");
            location.reload()
        }


}

const score = document.querySelector("#score");
const restart = document.querySelector("#restart");

restart.addEventListener("click", () => location.reload());