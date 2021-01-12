import React from "react";
import PropTypes from "prop-types";

function ShowHighScore({ customOptions, toggleShowHighScore }) {
  return (
    <div className="ShowHighScoreOption">
      <label htmlFor="show-high-scores">Show high scores</label>
      <input
        id="show-high-scores"
        type="checkbox"
        checked={customOptions.showHighScore}
        onChange={toggleShowHighScore}
      />
    </div>
  );
}

ShowHighScore.propTypes = {
  customOptions: PropTypes.object.isRequired,
  toggleShowHighScore: PropTypes.func.isRequired,
};

export default ShowHighScore;
