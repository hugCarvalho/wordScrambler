import React from "react";
import PropTypes from "prop-types";

export function SelectHighScoreEntriesToDisplay({
  customOptions,
  setCustomOptions,
  defaultValue,
}) {
  const chooseNumberOfHighScoreEntriesToDisplay = (e, optionsObj) => {
    setCustomOptions({ ...optionsObj, defaultHighScoreEntries: +e.target.value });
  };

  return (
    <div className="SelectHighScoreEntriesToDisplay">
      <label htmlFor="high-scores">High Score entries</label>
      <select
        name="highScores"
        id="high-scores"
        onChange={e => chooseNumberOfHighScoreEntriesToDisplay(e, customOptions)}
        defaultValue={defaultValue}
      >
        {customOptions.highScoreEntries.map((item, i) => {
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

SelectHighScoreEntriesToDisplay.propTypes = {
  customOptions: PropTypes.object.isRequired,
  setCustomOptions: PropTypes.func.isRequired,
};

export default SelectHighScoreEntriesToDisplay;
