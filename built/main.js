// const textToType = ["Python", "Hacking", "JavaScript", "TypeScript"];
var highScore = 0;
var index = 0;
var score = 0;
var youCanType = false;
var timeleft = 10;
var gameHasFinished = false;
var updateScore = function (score) {
    something.textContent = "" + score;
    highScore = score;
    showHighScore.textContent = "" + highScore;
};
var showText = function (index) {
    showTextField.textContent = "Word to type now: " + textToType[index];
};
var checkIfMatch = function () {
    if (youCanType) {
        if (inputField.value == textToType[index]) {
            index += 1;
            score += 1;
            showText(index);
            inputField.value = '';
            something.textContent = '';
            updateScore(score);
            if (index > textToType.length) {
                showWinnerScreen();
            }
        }
        else if (inputField.value != textToType[index]) {
            score -= 1;
            inputField.value = '';
            something.textContent = 'Please type again!';
            updateScore(score);
        }
    }
    else {
        inputField.value = 'You cant type anymore';
    }
};
var startCountdown = function (timeleft) {
    var downloadTimer = setInterval(function () {
        countdownField.textContent = "" + timeleft;
        if (timeleft <= 0) {
            clearInterval(downloadTimer);
            gameEnded(highScoreHandler, score);
            youCanType = false;
            gameHasFinished = true;
        }
        timeleft -= 1;
    }, 1000);
};
startGameBtn.addEventListener('click', function () {
    startCountdown(timeleft);
    showText(index);
    youCanType = true;
});
resetButton.addEventListener('click', function () {
    if (gameHasFinished) {
        restartGame();
    }
    else if (!gameHasFinished) {
        showTextField.textContent = 'Your game hasnt finished!';
        return;
    }
});
inputField.addEventListener('keyup', function (e) {
    if (e.key == 'Enter') {
        checkIfMatch();
    }
});
