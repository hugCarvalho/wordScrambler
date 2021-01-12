import React from "react";
import "./RenderInstructions.scss";
import EndAnimationsDisplay from "../EndAnimationsDisplay/EndAnimationsDisplay";
import ScoreInstructions from "./ScoreInstructions/ScoreInstructions";
import ObjectiveInstructions from "./ObjectiveInstructions/ObjectiveInstructions";
import OptionsInstructions from "./OptionsInstructions/OptionsInstructions";
import FooterInstructions from "./FooterInstructions/FooterInstructions";
import OpenCloseInstructions from "./OpenCloseInstructions/OpenCloseInstructions";
import PropTypes from "prop-types";

import onPageChange from "./fns";
//TODO: make scoring text dynamic
//TODO: display msg about not being possible to open while playing

function Instructions({ gameStatus, gameWon, customOptions }) {
  const [activePage, setActivePage] = React.useState(1);
  const [showInstructions, setShowInstructions] = React.useState(
    customOptions.showInstructionsOnLoad
    //false
  );

  React.useEffect(() => {
    // console.log("GAMESTATUS", gameStatus);
    if (gameStatus === "playing") {
      setShowInstructions(false);
    }
  }, [gameStatus]);

  React.useEffect(() => {
    //console.log("showInstructions :>> ", showInstructions);
  }, [showInstructions]);
  return (
    <div className="Instructions">
      <div className="instructions__container">
        <div className="wrapper">
          <ObjectiveInstructions onPageChange={() => onPageChange(activePage)} />
          <ScoreInstructions onPageChange={() => onPageChange(activePage)} />
          <OptionsInstructions onPageChange={() => onPageChange(activePage)} />
        </div>
      </div>
      <FooterInstructions activePage={activePage} setActivePage={setActivePage} />
      <OpenCloseInstructions
        gameStatus={gameStatus}
        toggleCloseOpen={() => setShowInstructions(state => !state)}
        showInstructions={showInstructions}
      />
      <EndAnimationsDisplay showInstructions={showInstructions} gameWon={gameWon} />
    </div>
  );
}

Instructions.propTypes = {
  gameStatus: PropTypes.string.isRequired,
  gameWon: PropTypes.string,
};

export default Instructions;
