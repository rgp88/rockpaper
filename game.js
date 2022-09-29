let userChoice;
let computerChoice;
let showResult;
let userWins = 0;
let computerWins = 0;
let roundPlayed = 0;

function getUserChoice() {
    let userChoiceTemp = prompt('Choose Rock, Paper or Scisor',);
    if (userChoiceTemp == null) {
        userChoice = 'end';
    } else {
        userChoice = userChoiceTemp.toLowerCase();
        switch (userChoice) {
            case 'rock':
            case 'paper':
            case 'scisor':
                return userChoice;
                break;
            default:
                alert("choose the correct");
                getUserChoice();
        }
    }
}

function getComputerChoice() {    
    let computerChoiceTemp  = ['rock','paper','scisor'];
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
        } else if (userChoice == 'rock' && computerChoice == 'rock' || userChoice == 'paper' && computerChoice == 'paper' || userChoice == 'scisor' && computerChoice == 'scisor') {
            console.log("Round:"+(roundPlayed+1));
            console.log('User Choose: '+userChoice+' | Computer Choose: '+computerChoice)
            console.log('This round is a draw');
            console.log('User Wins: '+userWins+' | Computer Wins: '+computerWins);
            console.log('------------------------------------------------');
            roundPlayed++;
        } else if (userChoice == 'rock' && computerChoice == 'scisor' || userChoice == 'paper' && computerChoice == 'rock' || userChoice == 'scisor' && computerChoice == 'rock') {
            console.log("Round:"+(roundPlayed+1));
            console.log('User Choose: '+userChoice+' | Computer Choose: '+computerChoice)
            console.log('Player Wins this round');
            userWins++;
            console.log('User Wins: '+userWins+' | Computer Wins: '+computerWins);
            console.log('------------------------------------------------');
            roundPlayed++;
        } else if (userChoice == 'rock' && computerChoice == 'paper' || userChoice == 'paper' && computerChoice == 'scisor' || userChoice == 'scisor' && computerChoice == 'paper') {
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
game();