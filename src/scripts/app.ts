let idx = 0;
inputField.value = '';

const clickBtnHandler = () => {
  setInterval(countDownIsOver, 1000 * timerTime);
  showTextField.textContent = textToType[idx];
  if (idx > textToType.length) {
    alert('You have won');
  }
  if (inputField.value == textToType[idx]) {
    idx += 1;
    inputField.value = '';
  }
};

const countDownIsOver = () => {
  document.querySelector('div').innerHTML = `
    <p>Your time is over... Your highscore is</p>
    <button id="reset-button">Reset</button> 
  `;
};

const countdown = () => {};

startGameBtn.addEventListener('click', clickBtnHandler);

inputField.addEventListener('keyup', (e) => {
  if (e.key == 'Enter') {
    if (idx == 0) {
      clickBtnHandler();
    }
    clickBtnHandler();
  }
});

resetButton.addEventListener('click', () => {
  idx = 0;
  clickBtnHandler();
});
