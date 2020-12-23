import React from "react";

function OptionsInstructions({ onPageChange }) {
  return (
    <article className="OptionsInstructions" style={onPageChange().options}>
      <h4>Word:</h4>{" "}
      <p>
        Once the game is over, if you don't know the meaning of the chosen word, click on
        it to be taken to its wiki page.
      </p>
    </article>
  );
}

export default OptionsInstructions;
