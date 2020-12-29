import React from "react";
import { CustomOptionsContext } from "../../../App";

function OptionsHighScores() {
  //const [num, setNumEntries] = React.useState(numEntries);

  // console.log(customizableOptions);
  //🥇
  return (
    <form>
      <div>
        <SelectHighScoreEntriesToDisplay />
        {/* <span className="validity"></span> */}
      </div>
    </form>
  );
}

export function SelectHighScoreEntriesToDisplay() {
  const { customOptions, setCustomOptions } = React.useContext(CustomOptionsContext);

  const chooseNumberOfHighScoreEntriesToDisplay = (e, obj) => {
    let copyObj = { ...obj };
    copyObj.defaultHighScoreEntries = +e.target.value;
    setCustomOptions(copyObj);
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

export default OptionsHighScores;
