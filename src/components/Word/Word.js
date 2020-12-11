import React from "react";
import "./Word.scss";

function Word({ gameStatus, scrambledWord, correctWord }) {
  return (
    <div className="word">
      word:{" "}
      {gameStatus === "onLoad" || gameStatus === "scramblingWord"
        ? "???"
        : gameStatus === "playing"
        ? scrambledWord
        : gameStatus === "ended"
        ? correctWord
        : null}
    </div>
  );
}

export default Word;
