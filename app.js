"use strict";

const readline = require("node:readline");

let score = 0;
let scoreComputer = 0;
const dataGame = ["ROCK", "PAPER", "SCISSORS"];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function getInput() {
  return new Promise((resolve, rejects) => {
    rl.question(
      "Enter one of the following words (ROCK/PAPER/SCISSORS) ?  ",
      (answer) => {
        const dataInput = answer.toUpperCase();
        switch (dataInput) {
          case dataGame[0]:
            resolve(dataInput);
            break;
          case dataGame[1]:
            resolve(dataInput);
            break;
          case dataGame[2]:
            resolve(dataInput);
            break;
          default:
            rejects(new Error("Input Invalid, Try again!"));
        }
      }
    );
  });
}

async function logicGame() {
  try {
    const computerPlayer = dataGame[Math.floor(Math.random() * 3)];
    const data = await getInput();
    switch (data + computerPlayer) {
      case "PAPERPAPER":
      case "SCISSORSSCISSORS":
      case "ROCKROCK":
        console.log("========================");
        console.log(
          `Computer Score Now: ${scoreComputer}\nYour Score Now: ${score}\n\nComputer: ${computerPlayer}\nYou: ${data}\n\nDRAW\n`
        );
        break;
      case "PAPERROCK":
      case "ROCKSCISSORS":
      case "SCISSORSPAPER":
        console.log("========================");
        console.log(
          `\nComputer Score Now: ${(scoreComputer -= 1)}\nYour Score Now: ${(score += 1)}\n\nComputer: ${computerPlayer}\nYou: ${data}\n\nYOU WIN\n`
        );
        break;
      case "ROCKPAPER":
      case "SCISSORSROCK":
      case "PAPERSCISSORS":
        console.log("========================");
        console.log(
          `\nComputer Score Now: ${(scoreComputer += 1)}\nYour Score Now: ${(score -= 1)}\n\nComputer: ${computerPlayer}\nYou: ${data}\n\nYOU LOSE\n`
        );
        break;
    }
  } catch (err) {
    console.error("Error", err.message);
  } finally {
    rl.resume(logicGame());
  }
}

logicGame();