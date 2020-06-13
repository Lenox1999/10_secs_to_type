var idx = 0;
inputField.value = '';
var clickBtnHandler = function () {
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
var countDownIsOver = function () {
    document.querySelector('div').innerHTML = "\n    <p>Your time is over... Your highscore is</p>\n    <button id=\"reset-button\">Reset</button> \n  ";
};
var countdown = function () { };
startGameBtn.addEventListener('click', clickBtnHandler);
inputField.addEventListener('keyup', function (e) {
    if (e.key == 'Enter') {
        if (idx == 0) {
            clickBtnHandler();
        }
        clickBtnHandler();
    }
});
resetButton.addEventListener('click', function () {
    idx = 0;
    clickBtnHandler();
});
