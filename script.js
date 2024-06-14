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

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if(humanChoice === computerChoice){
        humanScore++;
        computerScore++;
        console.log("It's a tie! Both chose " + humanChoice);
    }else if(humanChoice === 'rock') {
        if(computerChoice === 'scissors'){
            humanScore++;
            console.log("You win! Rock beats scissors.");
        }else {
            computerScore++;
            console.log("You lose! Paper beats rock.");
        }
    }else if(humanChoice === 'paper') {
        if(computerChoice === 'rock'){
            humanScore++;
            console.log("You win! Paper beats rock.");
        }else {
            computerScore++;
            console.log("You lose! Scissors beats paper.");
        }
    }else{
        if(computerChoice === 'paper'){
            humanScore++;
            console.log("You win! scissors beats paper.");
        }else{
            computerScore++;
            console.log("You lose! Rock beats scissors.");
        }
    }
       
}