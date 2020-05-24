let saveHighscore: number;

const gameEnded = (interactionHandler: Function, score: number) => {
  if (!youCanType) {
    let highscore = interactionHandler(score);
    showHighScore.textContent = `${highscore}`;
    something.textContent = `That is your final score: ${score}`;
    // startGameBtn.textContent = "Reset";
  } else if (youCanType) {
    return;
  }
};

const highScoreHandler = (score: number) => {
  let calculateScore = 0;
  let previousScore = score;
  calculateScore = score;
  if (calculateScore > previousScore) {
    saveHighscore = calculateScore;
  } else if (calculateScore < previousScore) {
    saveHighscore = previousScore;
  }
  return saveHighscore;
};

const restartGame = () => {
  index = 0;
  youCanType = true;
  gameHasFinished = false;
  score = 0;
  let highscore = highScoreHandler(saveHighscore);
  showHighScore.textContent = `Your Highscore: ${highscore}`;
  checkIfMatch();
};
