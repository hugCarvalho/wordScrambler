import React from "react";

function ObjectiveInstructions({ onPageChange }) {
  return (
    <div className="ObjectiveInstructions" style={onPageChange().instructions}>
      <p>
        <b>Instructions:</b>{" "}
        <i>guess the scrambled word in the least amount of guesses possible. </i>
        <i>The fastest and the more accurate you are, the more points you'll get.</i>
      </p>
    </div>
  );
}

export default ObjectiveInstructions;
