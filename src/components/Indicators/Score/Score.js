import React from "react";
import "./Score.scss";

function Score({ score }) {
  return (
    <div className="Score">
      <span role="img" aria-label="score" title="score">
        🎉
      </span>
      <span> {score}</span>
    </div>
  );
}

export default Score;
