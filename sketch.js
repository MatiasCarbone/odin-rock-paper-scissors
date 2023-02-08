// alert("Javascript sketch was linked successfully!");

function getComputerChoice() {
  max = 3;
  min = 1;

  choice = Math.floor(Math.random() * (max - min + 1)) + min;

  switch (choice) {
    case 1:
      return "Rock";
    case 2:
      return "Paper";
    case 3:
      return "Scissors";
  }
}

function playRound(player_input, computer_input) {
  if (player_input == computer_input) {
    return `The result is a tie! Both players chose ${player_input}.`;
  } else if (
    (player_input == "Rock" && computer_input == "Scissors") ||
    (player_input == "Paper" && computer_input == "Rock") ||
    (player_input == "Scissors" && computer_input == "Paper")
  ) {
    return `You win! ${player_input} beats ${computer_input.toLowerCase()}.`;
  } else {
    return `You lose! ${computer_input} beats ${player_input.toLowerCase()}.`;
  }
}

console.log(playRound("Rock", "Scissors"));
