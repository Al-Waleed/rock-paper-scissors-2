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

function playerChoice() {
    const userInput = prompt("Enter 1 for rock, 2 for paper and 3 for scissors");
        //ask user for an input 
    switch (+userInput) {// the "+" is to change the input from a string to an integer
        case 1:
            return "rock";
            break;
        case 2:
            return "paper";
            break;
        case 3:
            return "scissors";
            break;
    }//to match the number the player chose with rock paper or scissors

}


function playRound() {
    const computer = getComputerChoice();
    const player = playerChoice();

    console.log(`Yo chose ${player} and the computer chose ${computer}`)
    // to log the computer and the player's choice


    if(computer === player){
        console.log("It's a tie")
    }else if(computer == "rock" && player == "scissors"){
        console.log("Computer wins")
    }else if(computer == "paper" && player == "rock"){
        console.log("Computer wins")
    }else if(computer == "scissors" && player == "paper"){
            console.log("Computer wins")
    }else if(player == "rock" && computer == "scissors"){
        console.log("player wins")
    }else if(player == "paper" && computer == "rock"){
        console.log("player wins")
    }else if(player == "scissors" && computer == "paper"){
            console.log("player wins")
    }//see who wins at the game by evaluating the computer and the player choices
}

playRound();