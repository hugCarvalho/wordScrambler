import React from "react";
import "./GuessesLeft.scss";

function GuessesLeft({ guessesLeft }) {
  return (
    <div className="GuessesLeft">
      <span role="img" aria-label="guesses left" title="guesses left">
        🤔
      </span>{" "}
      <span>{guessesLeft}</span>
    </div>
  );
}

export default GuessesLeft;
//💭
