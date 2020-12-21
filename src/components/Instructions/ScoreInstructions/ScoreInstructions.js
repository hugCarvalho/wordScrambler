import React from "react";

function ScoreInstructions({ onPageChange }) {
  return (
    <div className="ScoreInstructions" style={onPageChange().score}>
      <b>Score:</b>{" "}
      <ul>
        <li>
          <i>
            <span>&#43;</span> 5 points for guess left
          </i>
        </li>
        <li>
          <i>
            <span>&#43;</span> number of letters of the word x 10{" "}
          </i>
        </li>
        <li>
          <i>
            <span>&#43;</span> time remaining:
          </i>
        </li>

        <ul className="nested-list">
          <li>
            <i>
              Level <strong>Hard</strong> - remaining time x 3
            </i>
          </li>
          <li>
            <i>
              Level <strong>Medium</strong> -remaining time x 2
            </i>
          </li>
          <li>
            <i>
              Level <strong>Easy</strong> - remaining time
            </i>
          </li>
        </ul>
      </ul>
    </div>
  );
}

export default ScoreInstructions;
