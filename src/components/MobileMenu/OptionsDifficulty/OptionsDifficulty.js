import React from "react";

function SelectEntriesToDisplay({ customOptions, setCustomOptions }) {
  const chooseNumberOfEntriesToDisplay = (e, optionsObj) => {
    console.log(e.target.value);
    setCustomOptions({ ...optionsObj, defaultDifficulty: e.target.value });
  };

  return (
    <div className="SelectHighScoreEntriesToDisplay">
      <label htmlFor="high-scores">Default difficulty</label>
      <select
        name="highScores"
        id="high-scores"
        onChange={e => chooseNumberOfEntriesToDisplay(e, customOptions)}
        defaultValue={customOptions.defaultDifficulty}
      >
        {customOptions.difficulty.map((item, i) => {
          return (
            <option key={i} value={item}>
              {item}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default SelectEntriesToDisplay;
