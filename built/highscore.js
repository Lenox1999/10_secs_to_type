var saveHighscore;
var gameEnded = function (interactionHandler, score) {
    if (!youCanType) {
        var highscore = interactionHandler(score);
        showHighScore.textContent = "" + highscore;
        something.textContent = "That is your final score: " + score;
        // startGameBtn.textContent = "Reset";
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
