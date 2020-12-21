const changeGuessesLeftColor = guesses => {
  if (guesses === 2) return { color: "#83d04e" };
  if (guesses === 1) return { color: "#ffd700" };
  if (guesses === 0) return { color: "#ff3434" };
  return;
};

export const renderEmojiFace = (guesses, gameOptions) => {
  const faces = ["🧐", "😨", "😲", "🤯"];
  const { totalGuessesLeft } = gameOptions;
  if (guesses === 0) return faces[3];
  else if (guesses === totalGuessesLeft) return faces[0];
  else if (guesses === totalGuessesLeft - 1) return faces[1];
  else if (guesses === totalGuessesLeft - 2) return faces[2];
  else return faces[2];
};

export default changeGuessesLeftColor;
