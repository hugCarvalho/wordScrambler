import React from "react";
import "./Word.scss";

function Word({ gameStatus, scrambledWord, correctWord }) {
  return (
    <div className="word">
      word:{" "}
      {gameStatus === "playing"
        ? scrambledWord
        : gameStatus === "ended"
        ? correctWord
        : "???"}
    </div>
  );
}

export default Word;
