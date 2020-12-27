import React from "react";

function OptionsHighScores() {
  return (
    <form>
      <div>
        <label htmlFor="high-scores">🥇 - high score entries (5-50):</label>
        <input
          id="high-scores"
          type="number"
          name="highScores"
          step="5"
          min="5"
          max="50"
          value="10"
          required
        />
        <span className="validity"></span>
      </div>
    </form>
  );
}

export default OptionsHighScores;
