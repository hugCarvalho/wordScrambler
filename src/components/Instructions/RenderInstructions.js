import React from "react";
import "./RenderInstructions.scss";
import AnimationsDisplay from "../AnimationsDisplay/AnimationsDisplay";
import ScoreInstructions from "./ScoreInstructions/ScoreInstructions";
import ObjectiveInstructions from "./ObjectiveInstructions/ObjectiveInstructions";
import OptionsInstructions from "./OptionsInstructions/OptionsInstructions";
import FooterInstructions from "./FooterInstructions/FooterInstructions";
import OpenCloseInstructions from "./OpenCloseInstructions/OpenCloseInstructions";

//TODO: make scoring text dynamic
//TODO: display msg about not being possible to open while playing

function Instructions({ gameStatus, gameWon }) {
  const [activePage, setActivePage] = React.useState(1);
  const [showInstructions, setShowInstructions] = React.useState(true);

  const onPageChange = () => {
    if (activePage === 2)
      return {
        instructions: { transform: "translateX(-100%)" },
        score: { transform: "translateX(-307px)" }, //transform: width instructions text container + margin
        options: { transform: "translateX(-292px)" },
      };
    if (activePage === 3)
      return {
        instructions: { transform: "translateX(-100%)" },
        score: { transform: "translateX(-200%)" },
        options: { transform: "translateX(-599px)" },
      };
    return { instructions: {}, score: {} };
  };

  React.useEffect(() => {
    // console.log("GAMESTATUS", gameStatus);
    if (gameStatus === "playing") {
      setShowInstructions(false);
    }
  }, [gameStatus]);
  return (
    <div className="Instructions">
      <div className="instructions__container">
        <div className="wrapper">
          <ObjectiveInstructions onPageChange={onPageChange} />
          <ScoreInstructions onPageChange={onPageChange} />
          <OptionsInstructions onPageChange={onPageChange} />
        </div>
      </div>
      <FooterInstructions activePage={activePage} setActivePage={setActivePage} />
      <OpenCloseInstructions
        gameStatus={gameStatus}
        setShowInstructions={setShowInstructions}
        showInstructions={showInstructions}
      />
      <AnimationsDisplay showInstructions={showInstructions} gameWon={gameWon} />
    </div>
  );
}

export default Instructions;
