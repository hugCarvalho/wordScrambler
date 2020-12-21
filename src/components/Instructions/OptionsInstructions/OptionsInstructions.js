import React from "react";

function OptionsInstructions({ onPageChange }) {
  return (
    <div className="OptionsInstructions" style={onPageChange().options}>
      <b>Word:</b>{" "}
      <i>
        once the game is over, if you don't know the meaning of the chosen word, click on
        it to be taken to its wiki page.
      </i>
    </div>
  );
}

export default OptionsInstructions;
