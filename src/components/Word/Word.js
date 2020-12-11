import React from "react";
import "./Word.scss";

function Word({ gameStatus, scrambledWord, correctWord }) {
  return (
    <div className="Word">
      word:
      <span>
        {gameStatus === "onLoad" || gameStatus === "scramblingWord"
          ? "???"
          : gameStatus === "playing"
          ? scrambledWord
          : gameStatus === "ended"
          ? correctWord
          : null}
      </span>
    </div>
  );
}

export default Word;
