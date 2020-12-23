import React, { useRef } from "react";
import applause1 from "./audio/applause1.mp3";
import boo from "./audio/boo2.mp3";

function Audio({ gameWon, soundOptions }) {
  const [playSound, setPlaySound] = React.useState(false);
  const audioLoser = useRef();
  const audioWinner = useRef();

  React.useEffect(() => {
    if (gameWon) {
      setPlaySound(true);
    }
  }, [gameWon]);

  React.useEffect(() => {
    //console.log("audio", audioLoser.current);
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
    <div>
      <audio ref={audioLoser} autoPlay>
        <source src={boo} type="audio/mp3"></source>
      </audio>
      <audio ref={audioWinner} autoPlay>
        <source src={applause1} type="audio/mp3"></source>
      </audio>
    </div>
  );
}

export default Audio;
