let gameIsRunning = false;
const textToType = ["Python", "Hacking", "JavaScript", "TypeScript"];
let index = 0;

const showText = (index) => {
  showTextField.textContent = `Word to type now: ${textToType[index]}`;
};

const checkIfMatch = () => {
  if (inputField.value == textToType[index]) {
    index += 1;
    showText(index);
    inputField.value = "";
    something.textContent = "";
  } else if (inputField.value != textToType[index]) {
    inputField.value = "";
    something.textContent = "Please type again!";
  }
};

const startCountdown = () => {
  let timeleft = 10;
  let downloadTimer = setInterval(function () {
    countdownField.textContent = timeleft;
    if (timeleft <= 0) {
      clearInterval(downloadTimer);
    }

    timeleft -= 1;
  }, 1000);
};

showText(index);
startCountdown();

// startGameBtn.addEventListener("click", () => {
//   checkIfMatch();
// });

inputField.addEventListener("keyup", (e) => {
  if (e.key == "Enter") {
    checkIfMatch();
  }
});
