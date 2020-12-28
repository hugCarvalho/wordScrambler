import React from "react";

function OptionsHighScores(numEntries, onChange) {
  //const [num, setNumEntries] = React.useState(numEntries);
  console.log(onChange);

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
          value={numEntries.numEntries}
          onChange={onChange}
          required
        />
        <span className="validity"></span>
      </div>
    </form>
  );
}

export default OptionsHighScores;
