import React from "react";
import "./GameOptionsMenu.scss";
import BackdropSlidingMenu from "./BackdropSlidingMenu/BackdropSlidingMenu";
import OptionsHighScores from "./OptionsHighScores/OptionHighScores";

function GameOptionsMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

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
        <OptionsHighScores />
      </BackdropSlidingMenu>
    </>
  );
}

export default GameOptionsMenu;
