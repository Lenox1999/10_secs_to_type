var saveHighscore;
var gameEnded = function (interactionHandler, score) {
    if (!youCanType) {
        var highscore = interactionHandler(score);
        showHighScore.textContent = "" + highscore;
        something.textContent = "This is your final score: " + score;
        showTextField.textContent =
            "Your time is over! See your score and highscore below! :D";
    }
    else if (youCanType) {
        return;
    }
};
var highScoreHandler = function (score) {
    var calculateScore = 0;
    var previousScore = score;
    calculateScore = score;
    if (calculateScore > previousScore) {
        saveHighscore = calculateScore;
    }
    else if (calculateScore < previousScore) {
        saveHighscore = previousScore;
    }
    return saveHighscore;
};
var restartGame = function () {
    index = 0;
    youCanType = true;
    gameHasFinished = false;
    score = 0;
    var highscore = highScoreHandler(saveHighscore);
    showHighScore.textContent = "Your Highscore: " + highscore;
    checkIfMatch();
};
var showWinnerScreen = function () {
    showTextField.textContent =
        "Yay... you have beaten it... you have typed all the words in ten secs... yay!";
};
