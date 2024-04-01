function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3 ) + 1
    
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
    }
}
