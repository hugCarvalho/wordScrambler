import React from "react";
import { CustomOptionsContext } from "../../../App";

function OptionsHighScores() {
  //const [num, setNumEntries] = React.useState(numEntries);

  // console.log(customizableOptions);
  //🥇
  return (
    <form>
      <div>
        <ShowHighScoreOption />
        <SelectHighScoreEntriesToDisplay />
        {/* <span className="validity"></span> */}
      </div>
    </form>
  );
}

export function SelectHighScoreEntriesToDisplay() {
  const { customOptions, setCustomOptions } = React.useContext(CustomOptionsContext);

  const chooseNumberOfHighScoreEntriesToDisplay = (e, optionsObj) => {
    setCustomOptions({ ...optionsObj, defaultHighScoreEntries: +e.target.value });
  };

  return (
    <div className="Select">
      <label htmlFor="high-scores">High Score entries: </label>
      <select
        name="highScores"
        id="high-scores"
        onChange={e => chooseNumberOfHighScoreEntriesToDisplay(e, customOptions)}
        defaultValue={customOptions.defaultHighScoreEntries}
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

export function ShowHighScoreOption() {
  const { customOptions, setCustomOptions } = React.useContext(CustomOptionsContext);

  const toggleShowHighScore = optionsObj => {
    return setCustomOptions({ ...optionsObj, showHighScore: !optionsObj.showHighScore });
  };

  return (
    <div className="ShowHighScoreOption">
      <label htmlFor="show-high-scores">Show high scores:</label>
      <input
        id="show-high-scores"
        type="checkbox"
        checked={customOptions.showHighScore}
        onChange={() => toggleShowHighScore(customOptions)}
      />
    </div>
  );
}

export default OptionsHighScores;
