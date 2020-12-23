import React from "react";
import PropTypes from "prop-types";

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

OptionsInstructions.propTypes = {
  onPageChange: PropTypes.func.isRequired,
};

export default OptionsInstructions;
