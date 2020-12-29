const gameOptions = {
  totalGuessesLeft: 3,
  countdown: 30,
  score: 0,
  pointsPerGuessLeft: 5,
  pointsPerTimeLeft: 2,
  pointsPerWordLength: 10,
  soundOn: false,
  displayHighScores: { yes: true, numEntries: 10 }, //10 -20 -30
};

export const optionsCustom = {
  soundOn: true,
  //highScores: { show: true, numEntries: [10, 20, 30, 40, 50] },
  //highScore: { show: true, numEntries: { 10: true, 20: false, 30: false } },
  showHighScore: true,
  highScoreEntries: [10, 20, 30, 40, 50],
  defaultHighScoreEntries: 10,
};

export default gameOptions;
