const textToType = ["Python", "Hacking", "JavaScript", "TypeScript"];

let highScore = 0;
let index = 0;
let score = 0;
let youCanType = false;
let timeleft = 10;
let gameHasFinished = false;

const updateScore = (score: number) => {
  something.textContent = `${score}`;
  highScore = score;
  showHighScore.textContent = `${highScore}`;
};

const showText = (index: number) => {
  showTextField.textContent = `Word to type now: ${textToType[index]}`;
};

const checkIfMatch = () => {
  if (youCanType) {
    if (inputField.value == textToType[index]) {
      index += 1;
      score += 1;
      showText(index);
      inputField.value = "";
      something.textContent = "";
      updateScore(score);
    } else if (inputField.value != textToType[index]) {
      score -= 1;
      inputField.value = "";
      something.textContent = "Please type again!";
      updateScore(score);
    }
  } else {
    inputField.value = "You cant type anymore";
  }
};

const startCountdown = (timeleft: number) => {
  let downloadTimer = setInterval(function () {
    countdownField.textContent = `${timeleft}`;
    if (timeleft <= 0) {
      clearInterval(downloadTimer);
      gameEnded(highScoreHandler, score);
      youCanType = false;
      gameHasFinished = true;
    }

    timeleft -= 1;
  }, 1000);
};

startGameBtn.addEventListener("click", () => {
  startCountdown(timeleft);
  showText(index);
  youCanType = true;
});

resetButton.addEventListener("click", () => {
  if (gameHasFinished) {
    restartGame();
  } else if (!gameHasFinished) {
    showTextField.textContent = "Your game hasnt finished!";
    return;
  }
});

inputField.addEventListener("keyup", (e) => {
  if (e.key == "Enter") {
    checkIfMatch();
  }
});
