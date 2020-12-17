import React from "react";
import "./Score.scss";

function Score({ score, gameWon }) {
  const changeBgColor = () =>
    gameWon ? { backgroundColor: "#f1f2da" } : { backgroundColor: "#282c34" };

  return (
    <div style={changeBgColor(gameWon)} className="Score">
      <span role="img" aria-label="score" title="score">
        🎉
      </span>
      <span style={{ backgroundColor: "#282c34" }}> {score}</span>
    </div>
  );
}

export default Score;
