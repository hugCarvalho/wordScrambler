import React from "react";

function ObjectiveInstructions({ onPageChange }) {
  return (
    <article className="ObjectiveInstructions" style={onPageChange().instructions}>
      <h4>Objective:</h4>
      <p>
        Guess the scrambled word in the least amount of guesses possible. The fastest and
        the more accurate you are, the more points you'll get.
      </p>
    </article>
  );
}

export default ObjectiveInstructions;
