import React from "react";
import "./GameOptionsMenu.scss";
import BackdropSlidingMenu from "./BackdropSlidingMenu/BackdropSlidingMenu";
import OptionsHighScores from "./OptionsHighScores/OptionHighScores";
//TODO: change to useContext to avoid prop-drilling

function GameOptionsMenu({ options }) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  //const { numEntries } = React.useState(options.displayHighScores); //change key name in original obj

  React.useEffect(() => {
    console.log("options", options);
  }, [options]);

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
      </BackdropSlidingMenu>
      <OptionsHighScores />
    </>
  );
}

export default GameOptionsMenu;
