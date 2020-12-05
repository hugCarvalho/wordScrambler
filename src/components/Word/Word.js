import React from "react";
import "./Word.scss";

function Word({ gameStatus, scrambledWord }) {
  return (
    <div className="word">word: {gameStatus === "playing" ? scrambledWord : "???"}</div>
  );
}

export default Word;
