import React from "react";
import SelectHighScoreEntriesToDisplay from "./OptionsHighScores/SelectHighScoreEntriesToDisplay/SelectHighScoreEntriesToDisplay";
import ShowHighScore from "./OptionsHighScores/ShowHighScore/ShowHighScore";
import { CustomOptionsContext, SelectedCategory } from "../../App";
import Emoji from "../../reusable/Emoji/Emoji";
import SelectDefaultDifficulty from "./OptionsDifficulty/SelectDefaultDifficulty";
import ShowInstructionsOnLoad from "./OptionsInstructions/ShowInstructionsOnLoad";
import Select from "../../reusable/Select";
import { categories } from "../../data/gameOptions";

function Options() {
  //Using useContext here allows for PropTypes nested components. Otherwise won't work
  const { customOptions, setCustomOptions } = React.useContext(CustomOptionsContext);
  const { selectedCategory, setSelectedCategory } = React.useContext(SelectedCategory);

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
        <Emoji ariaLabel="category section">🔖</Emoji>
        <Select
          data={Object.keys(categories)}
          id="categories"
          handleOnChange={e => setSelectedCategory(e.target.value)}
          defaultValue={selectedCategory}
        >
          Default category
        </Select>
      </div>
    </section>
  );
}

export default Options;
