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
