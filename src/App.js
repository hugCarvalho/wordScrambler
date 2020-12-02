import { useEffect, useState } from "react";
import "./App.css";

//make options obj
const initCountdown = 5;
const initGuessesLeft = 3;

function App() {
  const [gameStatus, setGameStatus] = useState("idle"); // "idle", "playing", "ended"
  const [countdown, setCountdown] = useState(initCountdown);
  //const [counting, setCounting] = useState(false);
  const [score, setScore] = useState(0);
  const [guessesLeft, setGuessesLeft] = useState(initGuessesLeft);

  //FUNCTIONS
  //Break function into other fns later
  const startGame = e => {
    e.preventDefault();
    if (gameStatus === "idle") {
      setGameStatus("playing");
    } else {
      setCountdown(5);
      setScore(0);
      setGameStatus("playing");
    }
  };

  //GAME ENDS IF COUNTDOWN GETS TO 0
  useEffect(() => {
    if (countdown < 1) {
      setGameStatus("ended");
    }

    return () => {
      //cleanup
    };
  }, [countdown]);

  useEffect(() => {
    console.log("gameStatus dependency");
    let timer = null;
    if (gameStatus === "playing") {
      timer = setInterval(() => {
        setCountdown(state => state - 1);
      }, 1000);
    } else {
      clearInterval(timer);
    }

    return () => {
      clearInterval(timer);
    };
  }, [gameStatus]);

  useEffect(() => {
    console.log("gameStatus :>> ", gameStatus);
    console.log("countdown :>> ", countdown);
    return () => {
      //cleanup
    };
  }, [gameStatus, countdown]);

  return (
    <div className="App">
      {/* HEADER */}
      <header className="App-header">
        <h1>Word Scrambler</h1>
      </header>

      {/* Main App */}
      <main className="app">
        <div className="text">
          <span className="scrambled-w  hidden"></span>
          <span className="scrambled-w  hidden"></span>
          <span className="scrambled-w  hidden">{countdown}</span>
        </div>

        <div className="output">
          <form>
            <input
              className=""
              type="text"
              id="input-text"
              autoFocus
              disabled={gameStatus !== "playing"}
              autoComplete="off"
            />
            <button type="button" onClick={e => startGame(e)}>
              {gameStatus === "idle"
                ? "Start"
                : gameStatus === "playing"
                ? "Guess"
                : "Restart"}
            </button>
            <button type="button" onClick={() => setGameStatus("ended")}>
              END
            </button>
          </form>
        </div>

        {/* Instructions */}
        <div className="instructions">
          <p>
            <b>Instructions:</b>{" "}
            <i>
              guess the scrambled word in the least amount of guesses possible. The
              fastest you are the more points you'll get.
            </i>
          </p>
          aa
        </div>
      </main>
    </div>
  );
}

export default App;
