import React from "react";

function ScoreInstructions({ onPageChange }) {
  return (
    <article className="ScoreInstructions" style={onPageChange().score}>
      <h4>Score:</h4>
      <ul>
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
          Level <b>Easy</b> - remaining time
        </li>
        <li className="nested-list">
          Level <b>Medium</b> -remaining time x 2
        </li>
        <li className="nested-list">
          Level <b>Hard</b> - remaining time x 3
        </li>
      </ul>
    </article>
  );
}

export default ScoreInstructions;
