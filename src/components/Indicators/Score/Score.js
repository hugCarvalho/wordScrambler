import React from "react";
import "./Score.scss";
import Emoji from "../../../reusable/Emoji/Emoji";
import PropTypes from "prop-types";

function Score({ score, gameWon }) {
  const changeEmojiBgColorOnWin = gameWon =>
    gameWon === "yes" ? { backgroundColor: "white" } : { backgroundColor: "#282c34" };

  return (
    <div style={changeEmojiBgColorOnWin(gameWon)} className="Score">
      <Emoji aria-label="score" title="score" style={{ color: "white" }}>
        🎉
      </Emoji>
      <span style={{ backgroundColor: "#282c34" }}> {score}</span>
    </div>
  );
}

Score.propTypes = {
  score: PropTypes.number.isRequired,
  gameWon: PropTypes.string,
};

export default Score;
