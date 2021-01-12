import React from "react";
import "./OptionsMenu.scss";
import MobileSlidingMenu from "../MobileMenu/MobileSlidingMenu/MobileSlidingMenu";
import OptionsHighScores from "./OptionsHighScores/OptionHighScores";

function OptionsMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <>
      <div className="OptionsMenu">
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

export default OptionsMenu;
