import React from "react";
import "./GameOptionsMenu.scss";
import MobileSlidingMenu from "./MobileSlidingMenu/MobileSlidingMenu";
import OptionsHighScores from "./OptionsHighScores/OptionHighScores";
//TODO: change to useContext to avoid prop-drilling

function GameOptionsMenu({ options }) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

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
      <MobileSlidingMenu
        closeIcon={`❌`}
        isMenuOpen={isMenuOpen}
        closeMenu={() => setIsMenuOpen(state => !state)}
      >
        <h2>Options</h2>

        <OptionsHighScores />
      </MobileSlidingMenu>
    </>
  );
}

export default GameOptionsMenu;
