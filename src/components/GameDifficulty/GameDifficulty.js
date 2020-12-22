import React from "react";
import RadioButton from "../../reusable/RadioButton";
import "./GameDifficulty.scss";

function PlayDifficulty() {
  const [difficulty, setDifficulty] = React.useState("all");

  return (
    <form className="GameDifficulty">
      <p>Select your difficulty:</p>
      <RadioButton
        value="easy"
        active={difficulty}
        onChange={e => setDifficulty(e.target.value)}
      >
        Easy
      </RadioButton>
      <RadioButton
        value="medium"
        active={difficulty}
        onChange={e => setDifficulty(e.target.value)}
      >
        Medium
      </RadioButton>
      <RadioButton
        value="hard"
        active={difficulty}
        onChange={e => setDifficulty(e.target.value)}
      >
        Hard
      </RadioButton>
      <RadioButton
        value="all"
        active={difficulty}
        onChange={e => setDifficulty(e.target.value)}
      >
        All
      </RadioButton>
    </form>
  );
}

export default PlayDifficulty;
