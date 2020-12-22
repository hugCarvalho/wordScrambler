import React from "react";

function ScoreInstructions({ onPageChange }) {
  return (
    <div className="ScoreInstructions" style={onPageChange().score}>
      <b>Score:</b> {/* <i> */}
      <ul>
        <i>
          <li>
            <span>&#43;</span> 5 points for guess left
          </li>
          <li>
            <span>&#43;</span> number of letters of the word x 10{" "}
          </li>
          <li>
            <span>&#43;</span> time remaining:
          </li>
          <li className="nested-list">
            Level <strong>Hard</strong> - remaining time x 3
          </li>
          <li className="nested-list">
            Level <strong>Medium</strong> -remaining time x 2
          </li>
          <li className="nested-list">
            Level <strong>Easy</strong> - remaining time
          </li>
        </i>
      </ul>
    </div>
  );
}

export default ScoreInstructions;
