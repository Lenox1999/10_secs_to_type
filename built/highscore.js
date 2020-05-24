var saveHighscore;
var gameEnded = function (interactionHandler, score) {
    if (!youCanType) {
        var highscore = interactionHandler(score);
        showHighScore.textContent = "" + highscore;
        something.textContent = "That is your final score: " + score;
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
