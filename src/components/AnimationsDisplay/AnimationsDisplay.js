import React from "react";
import "./AnimationsDisplay.scss";

const animations = ["🏆", "🏅", "👏"];
const animationLoser = ["😵", "🤬", "😭"];

function AnimationsDisplay({ gameWon, showInstructions }) {
  const [randomNum, setRandomNum] = React.useState(null);
  // const [randomNum, setRandomNum] = React.useState(2);

  // console.log("SI", showInstructions);
  // console.log("GAMEONW", gameWon);

  React.useEffect(() => {
    if (gameWon) {
      setRandomNum(Math.floor(Math.random() * animations.length));
    }
  }, [gameWon]);
  console.log(randomNum);
  return (
    <section
      style={gameWon ? { backgroundColor: "white" } : {}}
      className={`AnimationsDisplay ${gameWon && "activate-game-end"} ${
        !showInstructions && "showToken"
      } "what"  `}
    >
      <div></div>
      {/* WON - icons will enter from different sides*/}
      <span
        className={`medal ${gameWon === "yes" && randomNum === 0 && "activate-medal"}`}
      >
        🏅
      </span>
      <span className={`clap ${gameWon === "yes" && randomNum === 1 && "activate-clap"}`}>
        👏
      </span>
      <span
        className={`trophy ${gameWon === "yes" && randomNum === 2 && "activate-trophy"}`}
      >
        {/* {gameWon && randomToken()} */}
        🏆
      </span>

      {/* LOST */}
      <span className={`loser ${gameWon === "no" && "activate-loser"}`}>
        {animationLoser[randomNum]}
      </span>
    </section>
  );
}

export default AnimationsDisplay;
//"🥇", "🥈", "🥉",
//😵🤬😭
