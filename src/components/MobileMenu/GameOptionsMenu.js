import React from "react";
import "./GameOptionsMenu.scss";
import MobileSlidingMenu from "./MobileSlidingMenu/MobileSlidingMenu";
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
      <MobileSlidingMenu
        closeMenuIcon={`❌`}
        isMenuOpen={isMenuOpen}
        onClick={() => setIsMenuOpen(state => !state)}
      >
        <h2>Options</h2>

        <OptionsHighScores />
      </MobileSlidingMenu>
    </>
  );
}

export default GameOptionsMenu;
