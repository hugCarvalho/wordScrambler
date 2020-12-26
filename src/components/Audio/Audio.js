import React, { useRef } from "react";
import "./Audio.scss";
import applause1 from "./audio/applause1.mp3";
import boo from "./audio/boo2.mp3";
import Emoji from "../../reusable/Emoji/Emoji";

function Audio({ gameWon, soundOptions, setSoundOptions }) {
  const [playSound, setPlaySound] = React.useState(false);
  const audioLoser = useRef();
  const audioWinner = useRef();

  React.useEffect(() => {
    if (gameWon) {
      setPlaySound(true);
    }
  }, [gameWon]);

  React.useEffect(() => {
    if (soundOptions && playSound && gameWon === "no") {
      audioLoser.current.play();
      setPlaySound(false);
    }
    if (soundOptions && playSound && gameWon === "yes") {
      audioWinner.current.play();
      setPlaySound(false);
    }
  }, [gameWon, playSound, soundOptions]);

  return (
    <div className="Audio">
      <div>
        <input
          id="sound-on"
          type="checkbox"
          checked={soundOptions}
          onChange={setSoundOptions}
        />
        <label htmlFor="sound-on">
          {soundOptions ? (
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
export default Audio;
