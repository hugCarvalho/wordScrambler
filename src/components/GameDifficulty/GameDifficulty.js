import React from "react";
import RadioButton from "../../reusable/RadioButton";
import "./GameDifficulty.scss";

function GameDifficulty({ difficulty, setDifficulty, gameStatus }) {
  console.log(gameStatus);
  return (
    <form className={`GameDifficulty`}>
      <div className={`${gameStatus === "playing" ? "disabled" : ""}`}>
        <RadioButton
          value="easy"
          active={difficulty}
          onChange={setDifficulty}
          disabled={gameStatus === "playing" ? true : false}
        >
          Easy
        </RadioButton>
        <RadioButton
          value="medium"
          active={difficulty}
          onChange={setDifficulty}
          disabled={gameStatus === "playing" ? true : false}
        >
          Medium
        </RadioButton>
        <RadioButton
          value="hard"
          active={difficulty}
          onChange={setDifficulty}
          disabled={gameStatus === "playing" ? true : false}
        >
          Hard
        </RadioButton>
        <RadioButton
          value="all"
          active={difficulty}
          onChange={setDifficulty}
          disabled={gameStatus === "playing" ? true : false}
        >
          All
        </RadioButton>
      </div>
    </form>
  );
}

export default GameDifficulty;
