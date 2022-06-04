import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [score, setScore] = useState(0);
  const [gameNum, setGameNum] = useState(1);

  let result;
  let randNum = null;
  let winningMove = "";
  let losingMove = "";
  let playerSelection = "";
  let computerSelection = "";
  let movesArray = ["rock", "paper", "scissors"];
  let cThrow;
  let resultStatement;

  function computerPlay() {
      randNum = Math.floor(Math.random() * 3);

      cThrow = movesArray[randNum];

      return cThrow;
  }

  function playSingleRound(playerSelection, computerSelection) {
      if (playerSelection === "rock") {
          switch(computerSelection) {
              case "paper":
                  result = "lose";
                  winningMove = "paper";
                  losingMove = "beats rock";
                  break;
              case "scissors":
                  result = "win";
                  winningMove = "rock";
                  losingMove = "beats scissors";
                  setScore(score + 1);
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
                  break;
              case "rock":
                  result = "win";
                  winningMove = "paper";
                  losingMove = "beats rock";
                  setScore(score + 1);
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
                  setScore(score + 1);
                  break;
              case "rock":
                  result = "lose";
                  winningMove = "rock";
                  losingMove = "beats scissors";
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

  function game(playerChoice) {
    const moveDiv = document.querySelector(".move");

    if (gameNum < 5) {
      playerSelection = playerChoice.toLowerCase();
      computerSelection = computerPlay();

      setGameNum(gameNum + 1);

      moveDiv.innerHTML = playSingleRound(playerSelection, computerSelection);
    } else {
      moveDiv.innerHTML = "You have played all rounds";
    }

  }

  useEffect(() => {
    setScore(0);
    setGameNum(1);
  }, []);

  return (
    <div className="App">
      <header className="App-header"><h1>Rock Paper Scissors</h1></header>

      <main>
          <h2>Running score: {score}</h2>
          <p>What is your move for game #{gameNum}?</p>

          <button onClick={
            () => { console.log("rock"); game("rock"); }
            } type="button">Rock
          </button>

          <button onClick={
            () => { console.log("paper"); game("paper"); }
            } type="button">
              Paper
          </button>

          <button onClick={
            () => { console.log("scissors"); game("scissors"); }
          } type="button">
            Scissors
          </button>

          <p className="move"></p>
      </main>
    </div>
  );
}

export default App;
