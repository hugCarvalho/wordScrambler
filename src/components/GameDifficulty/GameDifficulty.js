import React from "react";
import RadioButton from "../../reusable/RadioButton";
import PropTypes from "prop-types";
import "./GameDifficulty.scss";

function GameDifficulty({ difficulty, setDifficulty, gameStatus }) {
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

GameDifficulty.propTypes = {
  difficulty: PropTypes.string.isRequired,
  setDifficulty: PropTypes.func.isRequired,
  gameStatus: PropTypes.string.isRequired,
};

export default GameDifficulty;
