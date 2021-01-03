import React from "react";
import PropTypes from "prop-types";

function SelectDefaultDifficulty({ customOptions, setCustomOptions, defaultValue }) {
  return (
    <div className="SelectDefaultDifficulty">
      <label htmlFor="select-default-difficulty">Default difficulty</label>
      <select
        name="selectDefaultDifficulty"
        id="select-default-difficulty"
        onChange={e =>
          setCustomOptions({ ...customOptions, defaultDifficulty: e.target.value })
        }
        defaultValue={defaultValue}
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

SelectDefaultDifficulty.propTypes = {
  customOptions: PropTypes.object.isRequired,
  setCustomOptions: PropTypes.func.isRequired,
  defaultValue: PropTypes.string.isRequired,
};

export default SelectDefaultDifficulty;
