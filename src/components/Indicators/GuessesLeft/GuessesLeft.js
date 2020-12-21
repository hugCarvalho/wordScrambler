import React from "react";
import "./GuessesLeft.scss";
import changeGuessesLeftColor, { renderEmojiFace } from "./fns";

import Emoji from "../../../reusable/Emoji.js/Emoji";

//TODO: put fn in separate file
//🤔
function GuessesLeft({ guessesLeft, gameOptions }) {
  return (
    <div className="GuessesLeft">
      <Emoji aria-label="guesses left" title="guesses left">
        {renderEmojiFace(guessesLeft, gameOptions)}
      </Emoji>
      <span style={changeGuessesLeftColor(guessesLeft)}>{guessesLeft}</span>
    </div>
  );
}

export default GuessesLeft;
