import React from "react";
import PropTypes from "prop-types";
import gameOptions from "../../../data/gameOptions";

function ScoreInstructions({ onPageChange }) {
  const { pointsPerGuessLeft, pointsPerWordLength } = gameOptions;
  return (
    <article className="ScoreInstructions" style={onPageChange().score}>
      <h4>Score:</h4>
      <ul>
        <li>
          <span>&#43;</span> {pointsPerGuessLeft} points for guess left
        </li>
        <li>
          <span>&#43;</span> number of letters of the word x {pointsPerWordLength}
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

ScoreInstructions.propTypes = {
  onPageChange: PropTypes.func.isRequired,
};
export default ScoreInstructions;
