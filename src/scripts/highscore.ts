let saveHighscore: number;

const gameEnded = (interactionHandler: Function, score: number) => {
  if (!youCanType) {
    let highscore = interactionHandler(score);
    showHighScore.textContent = `${highscore}`;
    something.textContent = `That is your final score: ${score}`;
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
