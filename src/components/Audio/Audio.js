import React, { useRef } from "react";
import "./Audio.scss";
import applause1 from "./audio/applause1.mp3";
import boo from "./audio/boo2.mp3";
import Emoji from "../../reusable/Emoji/Emoji";
import PropTypes from "prop-types";

function Audio({ gameWon, soundOn, setSoundOptions }) {
  const [playSound, setPlaySound] = React.useState(false);
  const audioLoser = useRef();
  const audioWinner = useRef();

  React.useEffect(() => {
    if (gameWon) {
      setPlaySound(true);
    }
  }, [gameWon]);

  React.useEffect(() => {
    if (soundOn && playSound && gameWon === "no") {
      audioLoser.current.play();
      setPlaySound(false);
    }
    if (soundOn && playSound && gameWon === "yes") {
      audioWinner.current.play();
      setPlaySound(false);
    }
  }, [gameWon, playSound, soundOn]);

  return (
    <div className="Audio">
      <div>
        <input
          id="sound-on"
          type="checkbox"
          checked={soundOn}
          onChange={setSoundOptions}
        />
        <label htmlFor="sound-on">
          {soundOn ? (
            <>
              <Emoji title="sound on">🔉 </Emoji>
              {/* <span>soundFX</span> */}
            </>
          ) : (
            <>
              <Emoji title="sound off">🔇</Emoji>
              {/* <span>soundFX</span> */}
            </>
          )}
        </label>
      </div>
      <audio ref={audioLoser}>
        <source src={boo} type="audio/mp3"></source>
      </audio>
      <audio ref={audioWinner}>
        <source src={applause1} type="audio/mp3"></source>
      </audio>
    </div>
  );
}

Audio.propTypes = {
  gameWon: PropTypes.string,
  soundOn: PropTypes.bool.isRequired,
  setSoundOptions: PropTypes.func.isRequired,
};

export default Audio;
