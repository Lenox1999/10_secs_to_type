let saveHighscore: number;

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
