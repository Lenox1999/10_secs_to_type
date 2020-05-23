let gameIsRunning = false;
const textToType = ["Python", "Hacking", "JavaScript", "TypeScript"];
let index = 0;
let timeleft = 10;
let youCanType = false;

const showText = (index) => {
  showTextField.textContent = `Word to type now: ${textToType[index]}`;
};

const checkIfMatch = () => {
  // if (timeleft <= 0) {
  //   youCanType = false;
  // }
  if (youCanType) {
    if (inputField.value == textToType[index]) {
      index += 1;
      showText(index);
      inputField.value = "";
      something.textContent = "";
    } else if (inputField.value != textToType[index]) {
      inputField.value = "";
      something.textContent = "Please type again!";
    }
  } else if (!youCanType) {
    something.textContent = "You cant type anymore!";
    inputField.value = "You cant type anymore";
  }
};

const startCountdown = (timeleft) => {
  let downloadTimer = setInterval(function () {
    countdownField.textContent = timeleft;
    if (timeleft <= 0) {
      clearInterval(downloadTimer);
      countdownField.textContent = "Your time is over!";
      showTextField.textContent = "Time is over, man!";
      youCanType = false;
    }

    timeleft -= 1;
  }, 1000);
};

startGameBtn.addEventListener("click", () => {
  startCountdown(timeleft);
  youCanType = true;
  showText(index);
});

inputField.addEventListener("keyup", (e) => {
  if (e.key == "Enter") {
    checkIfMatch();
  }
});
