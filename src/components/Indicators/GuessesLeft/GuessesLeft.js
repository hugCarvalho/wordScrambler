import React from "react";
import "./GuessesLeft.scss";
import changeGuessesLeftColor, { renderEmojiFace } from "./fns";
import PropTypes from "prop-types";

import Emoji from "../../../reusable/Emoji/Emoji";

//🤔
function GuessesLeft({ guessesLeft, gameOptions }) {
  return (
    <div className="GuessesLeft">
      <Emoji aria-label="guesses left" title="guesses left" style={{ color: "white" }}>
        {renderEmojiFace(guessesLeft, gameOptions)}
      </Emoji>
      <span style={changeGuessesLeftColor(guessesLeft)}>{guessesLeft}</span>
    </div>
  );
}

GuessesLeft.propTypes = {
  guessesLeft: PropTypes.number.isRequired,
  gameOptions: PropTypes.object.isRequired,
};

export default GuessesLeft;
