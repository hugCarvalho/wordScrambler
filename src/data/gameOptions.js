const gameOptions = {
  totalGuessesLeft: 3,
  countdown: 20,
  score: 0,
  pointsPerGuessLeft: 5,
  pointsPerTimeLeft: 2,
  pointsPerWordLength: 10,
};

export const optionsCustom = {
  soundOn: false,
  showHighScore: true,
  showInstructionsOnLoad: false,
  highScoreEntries: [10, 20, 30, 40, 50],
  defaultHighScoreEntries: 10,
  difficulty: ["easy", "medium", "hard", "all"],
  defaultDifficulty: "hard",
};

export default gameOptions;
