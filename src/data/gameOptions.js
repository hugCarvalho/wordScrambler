const gameOptions = {
  totalGuessesLeft: 3,
  countdown: 20,
  score: 0,
  pointsPerGuessLeft: 5,
  pointsPerTimeLeft: 2,
  pointsPerWordLength: 10,
};

export const optionsCustom = {
  soundOn: true,
  showHighScore: true,
  showInstructionsOnLoad: true,
  highScoreEntries: [10, 20, 30, 40, 50],
  defaultHighScoreEntries: 10,
  difficulty: ["easy", "medium", "hard", "all"],
  defaultDifficulty: "easy",
};

export const categories = {
  objects: ["spoon"],
  animals: ["dog", "donkey"],
};

export default gameOptions;
