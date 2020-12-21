import React from "react";
import Emoji from "../../reusable/Emoji.js/Emoji";
import "./EndAnimationsDisplay.scss";

const animations = ["🏆", "🏅", "👏"];
const animationLoser = ["😵", "🤬", "😭"];
//"🥇", "🥈", "🥉",
//😵🤬😭

function EndAnimationsDisplay({ gameWon, showInstructions }) {
  const [randomNum, setRandomNum] = React.useState(null);

  React.useEffect(() => {
    if (gameWon) {
      setRandomNum(Math.floor(Math.random() * animations.length));
    }
  }, [gameWon]);

  return (
    <section
      className={`EndAnimationsDisplay ${!showInstructions && "showToken"}`}
      style={gameWon ? { backgroundColor: "white" } : {}}
    >
      <div></div>

      {/* WON - icons will enter from different sides*/}
      <Emoji
        ariaLabel="won medal"
        className={`medal ${gameWon === "yes" && randomNum === 0 && "activate-medal"}`}
      >
        🏅
      </Emoji>
      <Emoji
        ariaLabel="won hands clapping"
        className={`clap ${gameWon === "yes" && randomNum === 1 && "activate-clap"}`}
      >
        👏
      </Emoji>
      <Emoji
        ariaLabel="won trophy"
        className={`trophy ${gameWon === "yes" && randomNum === 2 && "activate-trophy"}`}
      >
        🏆
      </Emoji>

      {/* LOST */}
      <Emoji
        ariaLabel="lost sad face"
        className={`loser ${gameWon === "no" && "activate-loser"}`}
      >
        {animationLoser[randomNum]}
      </Emoji>
    </section>
  );
}

export default EndAnimationsDisplay;
