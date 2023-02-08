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
