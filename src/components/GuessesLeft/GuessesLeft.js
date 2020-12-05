import React from "react";
import "./GuessesLeft.scss";

function GuessesLeft({ guessesLeft }) {
  return <span className="scrambled-w  hidden">Guesses Left: {guessesLeft}</span>;
}

export default GuessesLeft;
