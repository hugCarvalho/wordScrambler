import PropTypes from "prop-types";
import React from "react";
import "./DisplayHint.scss";
import style from "styled-components";

//🔀 ✅ ❎ 🔁
const ButtonDisplayHint = style.button`
  background-color: ${props =>
    props.disabled || !props.playing ? "gray" : "rgb(223, 223, 210)"};
  cursor: ${props => (props.disabled || !props.playing ? "not-allowed" : "")};
  color: rgb(47, 48, 47);
  height: 27px;
  width: 60px;
  position: absolute;
  top: -28px;
  right: -1px;
  padding: 0px 6px;
  border: 1px solid gray;
  border-bottom: none;
  border-radius: 3px 3px 0 0;
  transition: all 0.5s ease;
  opacity: 1;
  letter-spacing: 1px;

  &:hover {
    background-color: ${props =>
      props.disabled || !props.playing ? "" : "rgb(242, 242, 228)"}
  }
`;

function DisplayHint({ gameStatus, activateHint }) {
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
    console.log("Available:", isHintAvailable);
  }, [isHintAvailable]);

  return (
    <ButtonDisplayHint
      playing={gameStatus === "playing"}
      disabled={!isHintAvailable}
      //showHint={showHintBtn}
      title="changes color of letter to green if in the right order or red, if in wrong order "
      onClick={onClickHandler}
    >
      {" ✅ ❎"}
    </ButtonDisplayHint>
  );
}

DisplayHint.propTypes = {
  activateHint: PropTypes.func.isRequired,
  gameStatus: PropTypes.string.isRequired,
};

export default DisplayHint;
