const gameOptions = {
  totalGuessesLeft: 3,
  countdown: 20,
  score: 0,
  pointsPerGuessLeft: 5,
  pointsPerTimeLeft: 2,
  pointsPerWordLength: 10,
  soundOn: false,
};

export const optionsCustom = {
  soundOn: true,
  showHighScore: true,
  highScoreEntries: [10, 20, 30, 40, 50],
  defaultHighScoreEntries: 10,
};

export default gameOptions;
