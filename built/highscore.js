var saveHighscore;
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
};
