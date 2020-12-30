import React from "react";
import SelectHighScoreEntriesToDisplay from "./SelectHighScoreEntriesToDisplay/SelectHighScoreEntriesToDisplay";
import ShowHighScore from "./ShowHighScore/ShowHighScore";
import { CustomOptionsContext } from "../../../App";
import Emoji from "../../../reusable/Emoji/Emoji";
import SelectEntriesToDisplay from "../OptionsDifficulty/OptionsDifficulty";

function OptionsHighScores() {
  //Using useContext here allows for PropTypes nested components. Otherwise won't work
  const { customOptions, setCustomOptions } = React.useContext(CustomOptionsContext);

  const toggleShowHighScore = optionsObj => {
    return setCustomOptions({ ...optionsObj, showHighScore: !optionsObj.showHighScore });
  };
  return (
    <section className="OptionsHighScores">
      <div>
        <Emoji ariaLabel="high scores section">🥇</Emoji>
        <ShowHighScore
          customOptions={customOptions}
          toggleShowHighScore={() => toggleShowHighScore(customOptions)}
        />
        <SelectHighScoreEntriesToDisplay
          customOptions={customOptions}
          setCustomOptions={setCustomOptions}
        />
        <Emoji ariaLabel="high scores section">📈</Emoji>

        <SelectEntriesToDisplay
          customOptions={customOptions}
          setCustomOptions={setCustomOptions}
        />
      </div>
    </section>
  );
}

export default OptionsHighScores;
