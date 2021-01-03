import React from "react";
import "./GiveUpBtn.scss";

function GiveUpBtn({ countdown, options, gameStatus, setGuessesLeft, disabled }) {
  const [showBtn, setShowBtn] = React.useState(false);

  React.useEffect(() => {
    const setStyle = () => {
      const percent = options.countdown * 0.75;
      if (gameStatus === "playing" && countdown <= percent) {
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
      disabled={!showBtn} //for testing purpose
      type="button"
      name="secondary-btn"
      className={`GiveUpBtn`}
      onClick={() => setGuessesLeft(0)}
      style={showBtn ? { opacity: 1, pointerEvents: "all", cursor: "pointer" } : {}}
    >
      Give up
    </button>
  );
}

export default GiveUpBtn;
