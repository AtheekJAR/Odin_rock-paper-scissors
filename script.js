function getComputerChoice(){
    let randomNumber = Math.random()
    if(randomNumber <= 1/3) {
        return "rock"
    }else if(randomNumber >= 1/3 && randomNumber <= 2/3) {
        return "paper"
    }else {
        return "scissors"
    }
}

function getHumanChoice(){
    let choice = prompt("Enter your choice: rock, paper, or scissors").toLowerCase();
    
    if(choice === "rock" || choice === "paper" || choice === "scissors"){
        return choice
    }else{
        console.log("Invalid choice. Please enter rock, paper, or scissors.");
    }
}
