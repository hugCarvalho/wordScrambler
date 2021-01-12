import React from "react";
import SelectHighScoreEntriesToDisplay from "./SelectHighScoreEntriesToDisplay/SelectHighScoreEntriesToDisplay";
import ShowHighScore from "./ShowHighScore/ShowHighScore";
import { CustomOptionsContext } from "../../../App";
import Emoji from "../../../reusable/Emoji/Emoji";
import SelectDefaultDifficulty from "../OptionsDifficulty/SelectDefaultDifficulty";
import ShowInstructionsOnLoad from "../OptionsInstructions/ShowInstructionsOnLoad";

function OptionsHighScores() {
  //Using useContext here allows for PropTypes nested components. Otherwise won't work
  const { customOptions, setCustomOptions } = React.useContext(CustomOptionsContext);

  const toggleShowHighScore = optionsObj => {
    return setCustomOptions({ ...optionsObj, showHighScore: !optionsObj.showHighScore });
  };

  const toggleShowInstructionsOnLoad = optionsObj => {
    return setCustomOptions({
      ...optionsObj,
      showInstructionsOnLoad: !optionsObj.showInstructionsOnLoad,
    });
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
          defaultValue={customOptions.defaultHighScoreEntries}
        />

        <Emoji ariaLabel="difficulty section">📈</Emoji>
        <SelectDefaultDifficulty
          customOptions={customOptions}
          setCustomOptions={setCustomOptions}
          defaultValue={customOptions.defaultDifficulty}
        />

        <Emoji ariaLabel="instructions section">📖</Emoji>
        <ShowInstructionsOnLoad
          customOptions={customOptions}
          toggleShowInstructionsOnLoad={() => toggleShowInstructionsOnLoad(customOptions)}
        />
      </div>
    </section>
  );
}

export default OptionsHighScores;
