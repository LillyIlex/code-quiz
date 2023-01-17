
var clearHighScoresButton = document.querySelector("#clear")
var highScores = document.querySelector("#highscores")
var backButton = document.getElementById("back-btn")

//go back button

//clear scores button
clearHighScoresButton.addEventListener("click", clearScore);

// Bonus: Add reset button
var resetButton = document.querySelector(".reset-button");

function resetGame() {
  // Resets win and loss counts
  winCounter = 0;


  setWins()

}
// Attaches event listener to button
resetButton.addEventListener("click", resetGame);

