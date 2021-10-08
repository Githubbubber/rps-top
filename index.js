'use strict';

let pcTally = [0, 0];
let result;
let gameNum = 1;
let randNum = null;
let winningMove = "";
let losingMove = "";
let playerSelection = "";
let computerSelection = "";
let movesArray = ["rock", "paper", "scissors"];
let cThrow;
let resultStatement;

function playerPlay(gameNum) {
    let pThrow = prompt(`Move #${gameNum} What is your move?`);
    pThrow = pThrow ? pThrow.toLowerCase() : null;

    return pThrow;
}

function computerPlay() {
    randNum = Math.floor(Math.random() * 3);

    cThrow = movesArray[randNum];

    return cThrow;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock") {
        switch(computerSelection) {
            case "paper":
                result = "lose";
                winningMove = "paper";
                losingMove = "beats rock";
                pcTally[1] = ++pcTally[1];
                break;
            case "scissors":
                result = "win";
                winningMove = "rock";
                losingMove = "beats scissors";
                pcTally[0] = ++pcTally[0];
                break;
            default:  // computerSelection = "rock"
                result = "are tied";
                winningMove = "rock";
                losingMove = "is the same as rock";
        }
    } else if (playerSelection === "paper") {
        switch(computerSelection) {
            case "scissors":
                result = "lose";
                winningMove = "scissors";
                losingMove = "beats paper";
                pcTally[1] = ++pcTally[1];
                break;
            case "rock":
                result = "win";
                winningMove = "paper";
                losingMove = "beats rock";
                pcTally[0] = ++pcTally[0];
                break;
            default: // computerSelection = "paper"
                result = "are tied";
                winningMove = "paper";
                losingMove = "is the same as paper";
        }
    } else { // playerSelection === "scissors"
        switch(computerSelection) {
            case "paper":
                result = "win";
                winningMove = "scissors";
                losingMove = "beats paper";
                pcTally[0] = ++pcTally[0];
                break;
            case "rock":
                result = "lose";
                winningMove = "rock";
                losingMove = "beats scissors";
                pcTally[1] = ++pcTally[1];
                break;
            default: // computerSelection === "scissors"
                result = "are tied";
                winningMove = "scissors";
                losingMove = "is the same as scissors";
        }
    }

    winningMove = winningMove[0].toUpperCase() + winningMove.slice(1);

    resultStatement = `You ${result}! ${winningMove} ${losingMove}`;

    return resultStatement;
}

function game(gameNum) {
    playerSelection = playerPlay(gameNum);
    computerSelection = computerPlay();

    console.log(playRound(playerSelection, computerSelection));
}

alert("Ok let's play. Choose rock, paper, or scissors.");

while (gameNum < 6) {
    game(gameNum);
    gameNum++;
}

console.log(`And the winner overall is ${pcTally[0] > pcTally[1] ? "You!" : "The computer"}`);
