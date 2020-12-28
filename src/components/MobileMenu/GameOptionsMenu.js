import React from "react";
import "./GameOptionsMenu.scss";
import BackdropSlidingMenu from "./BackdropSlidingMenu/BackdropSlidingMenu";
import OptionsHighScores from "./OptionsHighScores/OptionHighScores";

//TODO: change to useContext to avoid prop-drilling

function GameOptionsMenu({ options, onChange }) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { numEntries } = options.displayHighScores; //change key name in original obj
  console.log(numEntries);
  console.log(onChange);

  return (
    <>
      <div className="GameOptionsMenu">
        <button
          title="options"
          className="fas fa-cog"
          onClick={() => setIsMenuOpen(state => !state)}
        ></button>
      </div>
      <BackdropSlidingMenu
        closeIcon={`❌`}
        isMenuOpen={isMenuOpen}
        closeMenu={() => setIsMenuOpen(state => !state)}
      >
        <h2>Options</h2>
        <OptionsHighScores numEntries={numEntries} onChange={onChange} />
      </BackdropSlidingMenu>
    </>
  );
}

export default GameOptionsMenu;
