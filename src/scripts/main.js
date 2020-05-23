let gameIsRunning = false;
const textToType = ["Python", "Hacking", "JavaScript", "TypeScript"];

const checkIfMatch = () => {
  for (const i of textToType) {
    if (i == inputField.value) {
      showTextField.textContent = "Thats right";
    }
  }
};

startGameBtn.addEventListener("click", () => {
  checkIfMatch();
});
