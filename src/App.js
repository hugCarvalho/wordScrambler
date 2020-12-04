import { useEffect, useState } from "react";
import "./App.css";

//TODO: delay appearance of scrambled word -first scramble then show
//make options obj
const initCountdown = 30;
const initGuessesLeft = 3;
//const initArr = ["dog", "bear", "horse", "python"];
const initArr = ["dog"];

function App() {
  const [gameStatus, setGameStatus] = useState("idle"); // "idle", "playing", "ended"
  const [countdown, setCountdown] = useState(initCountdown);
  //const [counting, setCounting] = useState(false);
  const [score, setScore] = useState(0);
  const [guessesLeft, setGuessesLeft] = useState(initGuessesLeft);
  const [array, setArray] = useState(initArr);
  const [scrambledWord, setScrambledWord] = useState("test");
  const [word, setWord] = useState("");

  const [guess, setGuess] = useState(null);
  const [correctWord, setCorrectWord] = useState(null);

  //FUNCTIONS
  //Break function into other fns later
  const onSubmitHandler = e => {
    //console.log(e.target.elements["input-text"].value);
    e.preventDefault();
    if (gameStatus === "idle") {
      setGameStatus("setup");
    } else if (gameStatus === "setup") {
      setGameStatus("playing");
    } else if (gameStatus === "playing") {
      setGuess(e.target.elements["input-text"].value);
    } else if (gameStatus === "ended") {
      setGameStatus("setup");
    } else {
      //console.log(scrambledWord === guess);
    }
  };

  //RESET
  useEffect(() => {
    if (gameStatus === "setup") {
      setGuessesLeft(initGuessesLeft);
      setCountdown(initCountdown);
      setScore(0);
      setWord("");
    }
    return () => {
      //cleanup
    };
  }, [gameStatus]);

  //GAME ENDS 💥
  //GAME ENDS IF GUESSES LEFT ARE 0
  useEffect(() => {
    if (guessesLeft === 0) {
      setGameStatus("ended");
      console.log("GAME ENDED, 0 GUESSES LEFT: ", guessesLeft);
    }
  }, [guessesLeft]);
  //GAME ENDS IF COUNTDOWN GETS TO 0 💥
  useEffect(() => {
    if (countdown < 1) {
      setGameStatus("ended");
      console.log("TIME IS UP!!!", countdown);
    }
    return () => {
      //cleanup
    };
  }, [countdown]);

  useEffect(() => {
    if (gameStatus === "ended") {
      console.log(gameStatus);
      console.log(`Game over, you ${guessesLeft > 0 && countdown > 0 ? "WON" : "LOST"}`);
    }
  }, [gameStatus, guessesLeft, countdown]);

  //GUESSES ⁉️
  useEffect(() => {
    if (guess && guess !== correctWord) {
      setGuessesLeft(state => state - 1);
    }
    if (correctWord && guess === correctWord) {
      console.log("Correct Word", correctWord, "guess", guess);
      setScore(100);
      setGameStatus("ended");
    }

    return () => {
      //console.log("CLEAN EFFECT");
    };
  }, [guess, correctWord]);

  //GENERATE RANDOM NUMBER AND WORD 🧣
  useEffect(() => {
    function scramble(arrayName) {
      const randomNum = Math.floor(Math.random() * arrayName.length);
      //console.log(randomNum);
      const num = Math.floor(Math.random() * 2);
      //console.log("NUM", num);
      //if (button.textContent !== "Check") {
      let randomOriginalWord = arrayName[randomNum];
      setCorrectWord(randomOriginalWord);
      //Will scramble the word differently each time
      let scrambledWord = randomOriginalWord
        .toLowerCase()
        .split("")
        .sort((a, b) => {
          if (a < b && num === 0) {
            return -1;
          } else if (a > b && num === 0) {
            return 1;
          } else if (a < b && num !== 0) {
            return 1;
          } else {
            return -1;
          }
        })
        .join("");

      //IF SCRAMBLED WORD === RANDOMWORD RUN SCRAMBLE FUNCTION AGAIN TO GET A VALID SCRAMBLED WORD
      if (scrambledWord === randomOriginalWord) {
        console.log("RUN THE FUCNTION AGAIN");
        //return scramble(arrayName);
      }
      //console.log("scrambledWord, randomword :", scrambledWord, randomWord);
      setScrambledWord(scrambledWord);
      setGameStatus("playing");
      //}
    }
    if (gameStatus === "setup") {
      scramble(array);
    }
    return () => {
      //cleanup
    };
  }, [gameStatus, array]);

  //TIMER ⏲️
  useEffect(() => {
    //console.log("gameStatus dependency");
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
    //console.log("countdown :>> ", countdown);
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
          <span className="scrambled-w  hidden">Guesses Left: {guessesLeft}</span>
          <span className="scrambled-w  hidden">Time: {countdown}</span>
          <span className="scrambled-w  hidden">Score:{score}</span>
        </div>
        <div></div>

        <div>word: {gameStatus !== "idle" ? scrambledWord : "???"}</div>
        <div className="input">
          <form onSubmit={e => onSubmitHandler(e)}>
            <input
              className=""
              type="text"
              id="input-text"
              autoFocus={gameStatus === "playing"}
              disabled={gameStatus !== "playing"}
              autoComplete="off"
              //value={word}
              //onChange={e => setWord(e.target.value)}
            />
            <button type="submit">
              {gameStatus === "idle"
                ? "Start"
                : gameStatus === "playing"
                ? "Guess"
                : "Restart"}
            </button>
            {/* <button type="submit" onClick={() => setGameStatus("ended")}>
              END
            </button> */}
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
