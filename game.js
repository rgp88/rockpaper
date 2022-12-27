let userChoice;
let computerChoice;
let showResult;
let userWins = 0;
let computerWins = 0;
let roundPlayed = 0;

function getUserChoice() {
    let userChoiceTemp = prompt('Choose Rock, Paper or Scissor',);
    if (userChoiceTemp == null) {
        userChoice = 'end';
    } else {
        userChoice = userChoiceTemp.toLowerCase();
        switch (userChoice) {
            case 'rock':
            case 'paper':
            case 'scissor':
                return userChoice;
                break;
            default:
                alert("choose the correct");
                getUserChoice();
        }
    }
}

function getComputerChoice() {    
    let computerChoiceTemp  = ['rock','paper','scissor'];
    let num = (Math.random() * ((3 - 0) + 0));
    let numRandom = Math.floor(num);
    computerChoice = computerChoiceTemp[numRandom];
    return computerChoice;
}

function game() {
    console.clear();

    while (roundPlayed<=4) {
        
        getUserChoice();
        getComputerChoice();
    
        if (userChoice == 'end') {
            roundPlayed = 5;  //end the game
        } else if (userChoice == 'rock' && computerChoice == 'rock' || userChoice == 'paper' && computerChoice == 'paper' || userChoice == 'scissor' && computerChoice == 'scissor') {
            console.log("Round:"+(roundPlayed+1));
            console.log('User Choose: '+userChoice+' | Computer Choose: '+computerChoice)
            console.log('This round is a draw');
            console.log('User Wins: '+userWins+' | Computer Wins: '+computerWins);
            console.log('------------------------------------------------');
            roundPlayed++;
        } else if (userChoice == 'rock' && computerChoice == 'scissor' || userChoice == 'paper' && computerChoice == 'rock' || userChoice == 'scissor' && computerChoice == 'rock') {
            console.log("Round:"+(roundPlayed+1));
            console.log('User Choose: '+userChoice+' | Computer Choose: '+computerChoice)
            console.log('Player Wins this round');
            userWins++;
            console.log('User Wins: '+userWins+' | Computer Wins: '+computerWins);
            console.log('------------------------------------------------');
            roundPlayed++;
        } else if (userChoice == 'rock' && computerChoice == 'paper' || userChoice == 'paper' && computerChoice == 'scissor' || userChoice == 'scissor' && computerChoice == 'paper') {
            console.log("Round:"+(roundPlayed+1));
            console.log('User Choose: '+userChoice+' | Computer Choose: '+computerChoice)
            console.log('Computer Wins this round');
            computerWins++;
            console.log('User Wins: '+userWins+' | Computer Wins: '+computerWins);
            console.log('------------------------------------------------');
            roundPlayed++;
        } 
    } 
    gameOver();
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

function borderGrey(class) {
    document.querySelector(class).style.borderColor = "grey";
};

function borderBlack(e) {
    e.stopPropagation();
    this.style.borderColor = "";
};

const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissor = document.querySelector(".scissor");