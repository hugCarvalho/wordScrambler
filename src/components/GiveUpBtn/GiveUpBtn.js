import React from "react";
import "./GiveUpBtn.scss";

function GiveUpBtn({ countdown, options, gameStatus, setGuessesLeft }) {
  const [showBtn, setShowBtn] = React.useState(false);

  React.useEffect(() => {
    const setStyle = () => {
      const percent = options.countdown * 0.9;
      console.log(gameStatus);
      if (gameStatus === "playing" && countdown < percent) {
        setShowBtn(true);
      }
    };
    setStyle();

    if (gameStatus === "ended") {
      setShowBtn(false);
    }
  }, [countdown, options.countdown, gameStatus]);

  return (
    <button
      type="button"
      className={`GiveUpBtn`}
      onClick={() => setGuessesLeft(0)}
      style={showBtn ? { opacity: 1, pointerEvents: "all" } : {}}
    >
      Give up
    </button>
  );
}

export default GiveUpBtn;
