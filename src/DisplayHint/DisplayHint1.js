import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import { scrambleWord } from "../App_functions";
import ButtonHint from "../reusable/BtnHint";
import "./DisplayHint.scss";

const ButtonHint1 = styled(ButtonHint)`
  left: -1px;
`;

//🔀  🔁

function DisplayHint1({ gameStatus, correctWord, rescrambleWord }) {
  const [isHintAvailable, setIsHintAvailable] = React.useState(true);

  const onClickHandler = () => {
    if (gameStatus === "playing") {
      setIsHintAvailable(false);
      rescrambleWord(scrambleWord(correctWord));
    } else return;
  };

  React.useEffect(() => {
    if (gameStatus === "setup") {
      setIsHintAvailable(true);
    }
    if (gameStatus === "ended") {
      setIsHintAvailable(false);
    }
  }, [gameStatus]);

  return (
    <ButtonHint1
      playing={gameStatus === "playing"}
      disabled={!isHintAvailable}
      title="reshuffles the chosen word"
      onClick={onClickHandler}
    >
      {"🔀"}
    </ButtonHint1>
  );
}

DisplayHint1.propTypes = {
  // activateHint: PropTypes.func.isRequired,
  gameStatus: PropTypes.string.isRequired,
  correctWord: PropTypes.string,
  rescrambleWord: PropTypes.func.isRequired,
};

export default DisplayHint1;
