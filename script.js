let userChoice = '';
function botMove() {
    let randomNumber = Math.random()
    let botChoice;
    if (randomNumber <= 1 / 3) {
        botChoice = 'Rock'
    } else if (randomNumber >= 1 / 3 && randomNumber <= 2 / 3) {
        botChoice = 'Paper'
    } else {
        botChoice = 'Scissors'
    }
    return botChoice
}

let score = {
    player: 0,
    bot: 0,
    tie: 0,
    result: '',
};
score = JSON.parse(localStorage.getItem('score')) || {
    player: 0,
    bot: 0,
    tie: 0,
    result: '',
};
localStorage.setItem('score', JSON.stringify(score));



let getResult;

const rpsButtonsDiv = document.querySelector(".rps-btns");

rpsButtonsDiv.addEventListener("click", getResult = function(e) {
    if (score.player === 5 || score.bot === 5 || score.tie === 5) {
        rpsButtonsDiv.removeEventListener("click", getResult);
        document.querySelector('.js-result').textContent = "Game Over";
        document.querySelector('.js-score').innerHTML = `Wins: ${score.player}, Losses: ${score.bot}, Ties: ${score.tie}`;
        localStorage.setItem('score', JSON.stringify(score));
    }else {
        if (e.target.matches(".btn, .emojies")) {
            const userChoice = e.target.id || e.target.parentElement.id;
            const botChoice = botMove();
            if (userChoice === botChoice) {
                score.tie++, score.result = "It's a draw..";
            } else if (userChoice === 'Rock') {
                botChoice === 'Paper' ? (score.bot++, score.result = 'You Lose') : (score.player++, score.result = 'You Win');
            } else if (userChoice === 'Paper') {
                botChoice === 'Rock' ? (score.player++, score.result = 'You Win') : (score.bot++, score.result = 'You Lose');
            } else {
                //userChoice === 'scissors'
                botChoice === 'Rock' ? (score.bot++, score.result = 'You Lose') : (score.player++, score.result = 'You Win');
            }
    
            document.querySelector('.js-result').innerHTML = score.result;
            document.querySelector('.js-moves').innerHTML = `You <img class="emojies" src="images/${userChoice}-emoji.png">  <img class="emojies" src="images/${botChoice}-emoji.png"> Computer`;
        }
    }

})

function restart() {
    rpsButtonsDiv.addEventListener("click", getResult);
    localStorage.removeItem('score');
    score = {
        player: 0,
        bot: 0,
        tie: 0,
        result: '',
    };
    document.querySelector('.js-score').innerHTML = "";

}

const restartBtn = document.querySelector(".restart-btn");
restartBtn.addEventListener("click", restart);