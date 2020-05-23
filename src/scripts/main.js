let gameIsRunning = false;
const textToType = ["Python", "Hacking", "JavaScript", "TypeScript"];
let index = 0;
let score = 0;
let youCanType = false;
let timeleft = 10;

const updateScore = (score) => {
  something.textContent = score;
};

const showText = (index) => {
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

const startCountdown = (timeleft) => {
  let downloadTimer = setInterval(function () {
    countdownField.textContent = timeleft;
    if (timeleft <= 0) {
      clearInterval(downloadTimer);
      countdownField.textContent =
        "Your time is over, you cant type anymore!";
      youCanType = false;
    }

    timeleft -= 1;
  }, 1000);
};

startGameBtn.addEventListener("click", () => {
  startCountdown(timeleft);
  showText(index);
  youCanType = true;
});

inputField.addEventListener("keyup", (e) => {
  if (e.key == "Enter") {
    checkIfMatch();
  }
});
