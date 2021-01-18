import PropTypes from "prop-types";
import React from "react";
import ButtonHint from "../reusable/BtnHint";
import "./DisplayHint.scss";

//🔀 ✅ ❎ 🔁

function DisplayHint2({ gameStatus, activateHint }) {
  //const [showHintBtn, setShowHintBtn] = React.useState(true);
  const [isHintAvailable, setIsHintAvailable] = React.useState(true);

  const onClickHandler = () => {
    if (gameStatus === "playing") {
      setIsHintAvailable(false);
      activateHint(true);
    } else return;
  };

  React.useEffect(() => {
    if (gameStatus === "setup") {
      //setShowHintBtn(true);
      setIsHintAvailable(true);
    }
    if (gameStatus === "ended") {
      setIsHintAvailable(false);
    }
  }, [gameStatus]);

  React.useEffect(() => {
    // console.log("Available:", isHintAvailable);
  }, [isHintAvailable]);

  return (
    <ButtonHint
      playing={gameStatus === "playing"}
      disabled={!isHintAvailable}
      //showHint={showHintBtn}
      title="changes color of letter to green if in the right order or red, if in wrong order "
      onClick={onClickHandler}
    >
      {" ✅ ❎"}
    </ButtonHint>
  );
}

DisplayHint2.propTypes = {
  activateHint: PropTypes.func.isRequired,
  gameStatus: PropTypes.string.isRequired,
};

export default DisplayHint2;
