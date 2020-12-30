import React from "react";
import SelectHighScoreEntriesToDisplay from "./SelectHighScoreEntriesToDisplay/SelectHighScoreEntriesToDisplay";
import ShowHighScore from "./ShowHighScore/ShowHighScore";
import { CustomOptionsContext } from "../../../App";

function OptionsHighScores() {
  const { customOptions, setCustomOptions } = React.useContext(CustomOptionsContext);

  const toggleShowHighScore = optionsObj => {
    return setCustomOptions({ ...optionsObj, showHighScore: !optionsObj.showHighScore });
  };
  return (
    <form className="OptionsHighScores">
      <div>
        🥇
        <ShowHighScore
          customOptions={customOptions}
          toggleShowHighScore={() => toggleShowHighScore(customOptions)}
        />
        <SelectHighScoreEntriesToDisplay
          customOptions={customOptions}
          setCustomOptions={setCustomOptions}
        />
      </div>
    </form>
  );
}

export default OptionsHighScores;
