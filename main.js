

let secretNumber = Math.trunc(Math.random()*30) + 1;
let body = document.querySelector('body');
let score  = 20;
let highScore = 0
let hiddenNumber  = document.querySelector('.number')
let btnReset  = document.querySelector('.btn-again')

const displaymessage = function (message) {
    document.querySelector('.start').textContent  = message;
}

document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);
    console.log(typeof guess);
    if(!guess && guess < 1 || guess > 30){
        displaymessage("Insert the correct number between 1 and 30")
    }else if(guess == secretNumber){
        displaymessage("You won!!")
        body.style.background = 'green'
        hiddenNumber.textContent = guess;
        document.querySelector('.konfetti').style.opacity = '1'
        if(score > highScore){
            highScore = score
            document.querySelector('.highscore').textContent = highScore;
        }
    }else if(guess!== secretNumber){
        if(score > 1){
            if(guess > secretNumber){
                displaymessage("Number should be smaller")
                score--;
                document.querySelector(".score").textContent = score;
            }else if (guess < secretNumber){
                displaymessage('Number should be bigger ')
                score--;
                document.querySelector(".score").textContent = score;
            }
        }else {
            displaymessage('Game over')
            document.querySelector(".score").textContent = 0;
            body.style.background   = 'red'
            document.querySelector(".start").style.fontSize = '100px';
        }
    }
});

btnReset.addEventListener('click', function(){
    score = 20;
    document.querySelector('.score').textContent = '20';
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    displaymessage('Type in the number from 1 to 30');
    hiddenNumber.textContent = '?';
    body.style.background = '';
    document.querySelector('.guess').value = "";
    document.querySelector('.konfetti').style.opacity = '0'
    document.querySelector(".start").style.fontSize = '';


})

