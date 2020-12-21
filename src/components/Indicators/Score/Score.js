import React from "react";
import "./Score.scss";
import Emoji from "../../../reusable/Emoji.js/Emoji";

function Score({ score, gameWon }) {
  const changeEmojiBgColorOnWin = gameWon =>
    gameWon === "yes" ? { backgroundColor: "white" } : { backgroundColor: "#282c34" };

  return (
    <div style={changeEmojiBgColorOnWin(gameWon)} className="Score">
      <Emoji aria-label="score" title="score">
        🎉
      </Emoji>
      <span style={{ backgroundColor: "#282c34" }}> {score}</span>
    </div>
  );
}

export default Score;
