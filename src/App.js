import { useEffect, useState } from "react";
import "./App.css";
import Countdown from "./components/Countdown/Countdown";
import GuessesLeft from "./components/GuessesLeft/GuessesLeft";
import Header from "./components/Header/Header";
import Input from "./components/Input/Input";
import Instructions from "./components/Instructions/Instructions";
import Score from "./components/Score/Score";
import Word from "./components/Word/Word";
import chooseWord, { scrambleWord } from "./functions/functions";

//TODO: delay appearance of scrambled word -first scramble then show
//make options obj
const initOptions = {
  guessesLeft: 3,
  countdown: 20,
  score: 0,
};

const initArr = ["dog", "bear", "horse", "python"];
//const initArr = ["da"];

function App() {
  const [gameStatus, setGameStatus] = useState("idle"); // "idle", "playing", "ended"
  const [guessesLeft, setGuessesLeft] = useState(initOptions.guessesLeft);
  const [countdown, setCountdown] = useState(initOptions.countdown);
  const [score, setScore] = useState(initOptions.score);
  //const [counting, setCounting] = useState(false);
  const [array, setArray] = useState(initArr);
  const [correctWord, setCorrectWord] = useState(null);
  const [scrambledWord, setScrambledWord] = useState("");
  const [guess, setGuess] = useState(null);

  const onSubmitHandler = e => {
    e.preventDefault();
    if (gameStatus === "idle") {
      setGameStatus("setup");
    } else if (gameStatus === "setup") {
      //setGameStatus("playing");
    } else if (gameStatus === "playing") {
      setGuess(e.target.elements["input-text"].value);
    } else if (gameStatus === "ended") {
      setCorrectWord(null);
      setGameStatus("setup");
    } else {
      throw new Error("OOOps, check status strings");
    }
  };

  //RESET
  useEffect(() => {
    if (gameStatus === "setup") {
      setGuessesLeft(initOptions.guessesLeft);
      setCountdown(initOptions.countdown);
      setScore(initOptions.score);
    }

    let timer = null;
    if (gameStatus === "playing") {
      timer = setInterval(() => {
        setCountdown(state => state - 1);
      }, 1000);
    } else {
      clearInterval(timer);
    }
    console.log("gameStatus :>> ", gameStatus);
    return () => {
      clearInterval(timer);
    };
  }, [gameStatus]);

  useEffect(() => {
    if (gameStatus === "setup") {
      console.log("SET CORRECT WORD");
      setCorrectWord(chooseWord(array));
    }
  }, [gameStatus, array]);

  //GENERATE RANDOM NUMBER AND WORD 🧣
  useEffect(() => {
    if (correctWord) {
      setScrambledWord(scrambleWord(correctWord));
      setGameStatus("playing");
      console.log("SCRAMBLE WORD");
    }
  }, [correctWord]);

  //GUESSES ⁉️
  useEffect(() => {
    console.log("CORRECT_WORD:", correctWord);
    if (guess && guess !== correctWord) {
      setGuessesLeft(state => state - 1);
    }
    if (guess && guess === correctWord) {
      console.log("Correct Word", correctWord, "guess", guess);
      setScore(100);
      setGameStatus("ended");
    }
  }, [guess, correctWord]);

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
  }, [countdown]);

  useEffect(() => {
    if (gameStatus === "ended") {
      console.log(`Game over, you ${guessesLeft > 0 && countdown > 0 ? "WON" : "LOST"}`);
    }
  }, [gameStatus, guessesLeft, countdown]);

  return (
    <div className="App">
      <Header />
      {/* Main App */}
      <main className="container__app">
        <div className="wrapper__app">
          <div className="indicators">
            <GuessesLeft guessesLeft={guessesLeft} />
            <Countdown countdown={countdown} />
            <Score score={score} />
          </div>
          <Word gameStatus={gameStatus} scrambledWord={scrambledWord} />
          <Input onSubmitHandler={onSubmitHandler} gameStatus={gameStatus} />
          <Instructions />
        </div>
      </main>
    </div>
  );
}

export default App;
