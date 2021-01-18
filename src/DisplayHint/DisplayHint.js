import React from "react";
import "./DisplayHint.scss";
import style from "styled-components";

const ButtonDisplayHint = style.button`
  background-color: rgb(241, 225, 1);
  color: rgb(47, 48, 47);
  height: 28px;
  position: absolute;
  top: -29px;
  right: -1px;
  padding: 3px 6px;
  border: 1px solid gray;
  border-bottom: none;
  border-radius: 3px 3px 0 0;
  transform: ${props => (props.showHint ? "translateY(0%)" : "translateY(100%)")};
  transition: transform 0.7s ease;
  opacity: 1;
  letter-spacing: 1px;

  &:hover {
    opacity: 0.8;
  }
`;

//TODO: useContext - Word - showHint
//TODO: add comments useeffects

function DisplayHint({ countdown, gameStatus, correctWord, scrambledWord }) {
  const [showHintBtn, setShowHintBtn] = React.useState(false);
  const [isHintAvailable, setIsHintAvailable] = React.useState(false);

  React.useEffect(() => {
    if (countdown < 16) {
      setShowHintBtn(true);
    }
  }, [countdown]);

  React.useEffect(() => {
    if (gameStatus === "ended") {
      setShowHintBtn(true);
      setIsHintAvailable(false);
    }
  }, [gameStatus]);

  React.useEffect(() => {
    if (isHintAvailable) {
      setIsHintAvailable(false);
    }
  }, [isHintAvailable]);

  return (
    <ButtonDisplayHint
      className="DisplayHint"
      disabled={!isHintAvailable}
      showHint={showHintBtn}
      // onClick={() => showHint(correctWord, scrambledWord)}
    >
      Hint 2
    </ButtonDisplayHint>
  );
}

export default DisplayHint;
