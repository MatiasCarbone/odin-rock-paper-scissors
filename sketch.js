//This functions returns a random choice between three values. Represents the computer.
function getComputerChoice() {
  let max = 3;
  let min = 1;

  let choice = Math.floor(Math.random() * (max - min + 1)) + min;

  switch (choice) {
    case 1:
      return "Rock";
    case 2:
      return "Paper";
    case 3:
      return "Scissors";
  }
}

//This function prompts the user for input. Then it formats and validates
//the input and returns it. In case the input is not what is expected, the
//function keeps repeating.
function getInput() {
  while (true) {
    let choice = prompt("Rock, paper or scissors? Enter your choice:");
    choice = choice[0].toUpperCase() + choice.slice(1).toLowerCase();

    if (choice == "Rock" || choice == "Paper" || choice == "Scissors") {
      return choice;
    }

    alert("Invalid input! Please try again.");
  }
}

//This function compares its two parameters and returns a string that announces the result.
function playRound(player_input, computer_input) {
  if (player_input == computer_input) {
    return "Tie";
  } else if (
    (player_input == "Rock" && computer_input == "Scissors") ||
    (player_input == "Paper" && computer_input == "Rock") ||
    (player_input == "Scissors" && computer_input == "Paper")
  ) {
    return `Win`;
  } else {
    return `Lose`;
  }
}

//This function keeps calls the above functions for a specified number of times
//to ask the user for input and compare it to the random choice of the computer and
//determine a winner for that round.
function game(rounds = 5) {
  let round;
  let playerScore;
  let computerScore;

  for (i = 1; i <= rounds; i++) {
    console.log(`Round ${i}:\n`);
    round = playRound(getInput(), getComputerChoice());

    console.log(round);
  }
}

game();
