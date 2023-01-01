let userChoice;
let computerChoice;
let showResult;
let userWins = 0;
let computerWins = 0;
let roundPlayed = 1;



const resultInfo = document.querySelector('.resultInfo');
const resultScoreUser2 = document.querySelector('.resultScoreUser2');
const resultScoreComp2 = document.querySelector('.resultScoreComp2');
const roundBox =document.querySelector('.roundBox');

const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissor = document.querySelector(".scissor");
const input = document.querySelector(".inputs");
const description = document.querySelector(".description");
const resetButton = document.createElement("div");
const main = document.querySelector(".main");
const compPick = document.getElementById('compPick');

roundBox.textContent = "Round Nr: "+roundPlayed;

function getComputerChoice() {    
    let computerChoiceTemp  = ['rock','paper','scissor'];
    let num = (Math.random() * ((3 - 0) + 0));
    let numRandom = Math.floor(num);
    computerChoice = computerChoiceTemp[numRandom];
    return computerChoice;
}

function gameLogic() {
    if (userChoice == 'rock' && computerChoice == 'rock' || userChoice == 'paper' && computerChoice == 'paper' || userChoice == 'scissor' && computerChoice == 'scissor') {
        userWins += 0.5;
        computerWins += 0.5;
        resultScoreUser2.textContent = userWins;
        resultScoreComp2.textContent = computerWins;
    } else if (userChoice == 'rock' && computerChoice == 'scissor' || userChoice == 'paper' && computerChoice == 'rock' || userChoice == 'scissor' && computerChoice == 'rock') {
        userWins++;
        resultScoreUser2.textContent = userWins;
        resultScoreComp2.textContent = computerWins;
    } else if (userChoice == 'rock' && computerChoice == 'paper' || userChoice == 'paper' && computerChoice == 'scissor' || userChoice == 'scissor' && computerChoice == 'paper') {
        computerWins++;
        resultScoreUser2.textContent = userWins;
        resultScoreComp2.textContent = computerWins;
    } 
}

function game() {

    if (roundPlayed<=4) {
        gameLogic();
    } else if (roundPlayed==5) {
        gameLogic();
        roundPlayed++;
        setTimeout(() => {
        gameOver();
        input.parentElement.removeChild(input);
        document.querySelector(".comp").removeChild(document.querySelector(".compup"));
        description.textContent = "Wanna play another game?";
        resetButton.textContent = "Click Here!";
        resetButton.classList.add("reset")
        main.insertBefore(resetButton,description.nextSibling)
        }, 900);
    }
}


function gameOver() {
    if (userWins>computerWins) {
        resultInfo.textContent = ('You are the winner');
     } else if (userWins===computerWins) {
        resultInfo.textContent = ('No Winner, this game was a tie');
     } else {
        resultInfo.textContent = ("Computer WINS");
     }
}


   

rock.addEventListener('click', ()=> {
    if(roundPlayed<=5) {
    userChoice = 'rock';
    input.removeChild(paper);
    input.removeChild(scissor);
    getComputerChoice();
    if (computerChoice === "rock") {
        compPick.src = 'pic/rock.png';
    } else if (computerChoice === "paper") {
        compPick.src = 'pic/paper.png';
    } else {
        compPick.src = 'pic/scissor.png';
    }
    setTimeout(() => {
        input.appendChild(scissor);   
        input.insertBefore(paper,scissor);    
        document.getElementById('compPick').src = 'pic/thinking.png';
        roundBox.textContent = "Round Nr: "+(roundPlayed);
        }, 1000);
        game();
        roundPlayed++;
    }
    });


paper.addEventListener('click', ()=> {
    if(roundPlayed<=5) {
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
    roundBox.textContent = "Round Nr: "+(roundPlayed);
    }, 1000);
    game();
    roundPlayed++;
    }
    });

scissor.addEventListener('click', ()=> {
    if(roundPlayed<=5) {
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
    roundBox.textContent = "Round Nr: "+(roundPlayed);
    }, 1000);
    game();
    roundPlayed++;
    }
    });


const inputat = document.querySelectorAll(".inputat");

inputat.forEach(itemi => {
    itemi.addEventListener('mousedown', mouseDown);
    itemi.addEventListener('mouseup', mouseUp);
});


resetButton.addEventListener('mousedown', mouseDown);
resetButton.addEventListener('mouseup', mouseUp);
resetButton.addEventListener('click',newGame);

function mouseDown() {
        this.style.backgroundColor = "green";
        this.style.borderColor = "grey";
}   

function mouseUp() {
    this.style.backgroundColor = "";
    this.style.borderColor = "";
}

function newGame() {
    window.location.reload();
}