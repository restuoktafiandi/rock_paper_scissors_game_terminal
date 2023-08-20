"use strict";

const readline = require("node:readline");

const score = { user: 0, computer: 0 };
const dataGame = ["ROCK", "PAPER", "SCISSORS"];

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

const getInput = () => {
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

const getResult = (user, computer) => {
	if (use === computer) {
		return "DRAW";
	}
	
	switch (user) {
		case "PAPER":
			if (computer === "ROCK") {
				score.user += 1;
				return "YOU WIN";
			}
			score.computer += 1;
			return "YOU LOSE";
		case "ROCK":
			if (computer === "SCISSORS") {
				score.user += 1;
				return "YOU WIN";
			}
			score.computer += 1;
			return "YOU LOSE";
		case "SCISSORS":
			if (computer === "PAPER") {
				score.user += 1;
				return "YOU WIN";
			}
			score.computer += 1;
			return "YOU LOSE";
	}
}

const logicGame = async () => {
	try {
		const computerInput = dataGame[Math.floor(Math.random() * 3)];
		const userInput = await getInput();
		const result = getResult(userInput, computerInput);
		console.log(`Computer Score Now: ${score.computer}\nYour Score Now: ${score.user}\n\nComputer: ${computerInput}\nYou: ${userInput}\n\n${result}\n`);
	} catch (err) {
		console.error("Error", err.message);
	} finally {
		rl.resume(logicGame());
	}
}

logicGame();