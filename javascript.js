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

// function playerChoice() {
//     const userInput = prompt("Enter 1 for rock, 2 for paper and 3 for scissors");
//         //ask user for an input 
//     switch (+userInput) {// the "+" is to change the input from a string to an integer
//         case 1:
//             return "rock";
//             break;
//         case 2:
//             return "paper";
//             break;
//         case 3:
//             return "scissors";
//             break;
//     }//to match the number the player chose with rock paper or scissors

// }


function playRound() {
    const computer = getComputerChoice();
    const player = playerChoice;

    console.log(`You chose ${player} and the computer chose ${computer}`)
    // to log the computer and the player's choice

    let Winner;
    let Tie;

    if(computer === player){
        alert("It's a tie, try again")
        return Tie = "tie"
    }else if(computer == "rock" && player == "scissors"){
        // console.log("Computer wins")
        return Winner = "computer"
    }else if(computer == "paper" && player == "rock"){
        // console.log("Computer wins")
        return Winner = "computer"
    }else if(computer == "scissors" && player == "paper"){
        // console.log("Computer wins")
        return Winner = "computer"
    }else if(player == "rock" && computer == "scissors"){
        // console.log("player wins")
        return Winner = "player"
    }else if(player == "paper" && computer == "rock"){
        // console.log("player wins")
        return Winner = "player"
    }else if(player == "scissors" && computer == "paper"){
        // console.log("player wins")
        return Winner = "player"
    }//see who wins at the game by evaluating the computer and the player choices
}

// function playGame() {
//     let playerCounter = 0;
//     let computerCounter = 0;
//     // to keep count of how many wins

//     for (let game = 0; game < 3; game++) {// play 3 rounds 
//         let round = playRound(); // start the round 
//         if (round == "tie" ){ //evaluate who wins
//             console.log("it's a tie")
//         }else if (round == "player"){
//             playerCounter++ // add 1 to the counter if player wins
//         }else if (round = "counter"){
//             computerCounter++ // add 1 to thr counter if computer wins
//         }
//     }

//     return `computer score ${computerCounter}, player score ${playerCounter}`;
//     // returns scores
// }   



let playerChoice;
function getPlayerChoice(){

    const buttons = document.querySelectorAll("button");
    
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
        }else if(computerCounter == 5){
            alert("Computer Wins.");
        }


}

const score = document.querySelector("#score");