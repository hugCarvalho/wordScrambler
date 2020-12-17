import React from "react";
import "./GuessesLeft.scss";

//TODO: change emoji for each guess left with transition
//TODO: put fn in separate file
function GuessesLeft({ guessesLeft }) {
  const renderFace = guesses => {
    const faces = ["🤔", "😨", "😲", "🤯"];
    if (guesses === 3) return faces[0];
    if (guesses === 2) return faces[1];
    if (guesses === 1) return faces[2];
    return faces[3];
  };

  const changeGuessColor = guesses => {
    if (guesses === 2) return { color: "#83d04e" };
    if (guesses === 1) return { color: "#ffd700" };
    if (guesses === 0) return { color: "#ff3434" };
    return;
  };

  return (
    <div className="GuessesLeft">
      <span role="img" aria-label="guesses left" title="guesses left">
        {renderFace(guessesLeft)}
      </span>{" "}
      <span style={changeGuessColor(guessesLeft)}>{guessesLeft}</span>
    </div>
  );
}

export default GuessesLeft;
