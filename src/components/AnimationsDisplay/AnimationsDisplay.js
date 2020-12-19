import React from "react";
import "./AnimationsDisplay.scss";

const animations = ["🏆", "🥇", "🥈", "🥉", "🏅", "👏"];
function AnimationsDisplay({ gameWon }) {
  //const [randomNum, setRandomNum] = React.useState(null);
  const [randomNum, setRandomNum] = React.useState(2);

  // React.useEffect(() => {
  //   if (gameWon) {
  //     setRandomNum(Math.floor(Math.random() * 3));
  //   }
  // }, [gameWon]);
  console.log(randomNum);
  return (
    <section
      style={gameWon ? { backgroundColor: "white" } : null}
      className={`AnimationsDisplay ${gameWon && "activate-game-end"}  `}
    >
      <div></div>
      <span className={`medal ${gameWon && randomNum === 1 && "activate-medal"}`}>
        🏅
      </span>
      <span className={`clap ${gameWon && randomNum === 2 && "activate-clap"}`}>👏</span>
      <span className={`trophy ${gameWon && randomNum === 0 && "activate-trophy"}`}>
        {/* {gameWon && randomToken()} */}
        🏆
      </span>
    </section>
  );
}

export default AnimationsDisplay;
//🏆🥇🥈🥉🏅👏
