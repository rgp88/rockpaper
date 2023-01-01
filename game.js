let userChoice;
let computerChoice;
let showResult;
let userWins = 0;
let computerWins = 0;
let roundPlayed = 1;


function getComputerChoice() {    
    let computerChoiceTemp  = ['rock','paper','scissor'];
    let num = (Math.random() * ((3 - 0) + 0));
    let numRandom = Math.floor(num);
    computerChoice = computerChoiceTemp[numRandom];
    return computerChoice;
}

function gameLogic() {
    if (userChoice == 'rock' && computerChoice == 'rock' || userChoice == 'paper' && computerChoice == 'paper' || userChoice == 'scissor' && computerChoice == 'scissor') {
        console.log("Round:"+(roundPlayed));
        console.log('User Choose: '+userChoice+' | Computer Choose: '+computerChoice)
        console.log('This round is a draw');
        console.log('User Wins: '+userWins+' | Computer Wins: '+computerWins);
        console.log('------------------------------------------------');
    } else if (userChoice == 'rock' && computerChoice == 'scissor' || userChoice == 'paper' && computerChoice == 'rock' || userChoice == 'scissor' && computerChoice == 'rock') {
        console.log("Round:"+(roundPlayed));
        console.log('User Choose: '+userChoice+' | Computer Choose: '+computerChoice)
        console.log('Player Wins this round');
        userWins++;
        console.log('User Wins: '+userWins+' | Computer Wins: '+computerWins);
        console.log('------------------------------------------------');
    } else if (userChoice == 'rock' && computerChoice == 'paper' || userChoice == 'paper' && computerChoice == 'scissor' || userChoice == 'scissor' && computerChoice == 'paper') {
        console.log("Round:"+(roundPlayed));
        console.log('User Choose: '+userChoice+' | Computer Choose: '+computerChoice)
        console.log('Computer Wins this round');
        computerWins++;
        console.log('User Wins: '+userWins+' | Computer Wins: '+computerWins);
        console.log('------------------------------------------------');
    } 
}

function game() {

    if (roundPlayed<=4) {
        gameLogic();
    } else if (roundPlayed==5) {
        gameLogic();
    gameOver(); }
}

function gameOver() {
    console.log('game over')
    if (userWins>computerWins) {
        console.log('You are the winner');
     } else if (userWins===computerWins) {
        console.log('No Winner, this game was a tie');
     } else {
        console.log("Computer WINS");
     }
     roundPlayed = 6;
}


const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissor = document.querySelector(".scissor");
const input = document.querySelector(".inputs");
   

rock.addEventListener('click', ()=> {
    userChoice = 'rock';
    input.removeChild(paper);
    input.removeChild(scissor);
    getComputerChoice();
    if (computerChoice === "rock") {
        document.getElementById('compPick').src = 'pic/rock.png';
    } else if (computerChoice === "paper") {
        document.getElementById('compPick').src = 'pic/paper.png';
    } else {
        document.getElementById('compPick').src = 'pic/scissor.png';
    }
    setTimeout(() => {
        input.appendChild(scissor);   
        input.insertBefore(paper,scissor);    
        document.getElementById('compPick').src = 'pic/thinking.png';
        }, 1000);
        game();
        roundPlayed++;
    });


paper.addEventListener('click', ()=> {
    userChoice = 'paper';
    input.removeChild(rock);
    input.removeChild(scissor);
    getComputerChoice();
    if (computerChoice === "rock") {
        document.getElementById('compPick').src = 'pic/rock.png';
    } else if (computerChoice === "paper") {
        document.getElementById('compPick').src = 'pic/paper.png';
    } else {
        document.getElementById('compPick').src = 'pic/scissor.png';
    }
    setTimeout(() => {
    input.insertBefore(rock,paper);
    input.appendChild(scissor);       
    document.getElementById('compPick').src = 'pic/thinking.png';
    }, 1000);
    game();
    roundPlayed++;
    });

scissor.addEventListener('click', ()=> {
    userChoice = 'scissor';
    input.removeChild(paper);
    input.removeChild(rock);
    getComputerChoice();
    if (computerChoice === "rock") {
        document.getElementById('compPick').src = 'pic/rock.png';
    } else if (computerChoice === "paper") {
        document.getElementById('compPick').src = 'pic/paper.png';
    } else {
        document.getElementById('compPick').src = 'pic/scissor.png';
    }
    setTimeout(() => {
    input.insertBefore(paper,scissor);
    input.insertBefore(rock,paper);       
    document.getElementById('compPick').src = 'pic/thinking.png';
    }, 1000);
    game();
    roundPlayed++;
    });

