import { useEffect, useRef, useState } from "react";
import "./App.css";
import Countdown from "./components/Countdown/Countdown";
import GuessesLeft from "./components/GuessesLeft/GuessesLeft";
import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
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
  const [gameStatus, setGameStatus] = useState("onFirstLoad"); // "onFirstLoad", "playing", "ended"
  const [guessesLeft, setGuessesLeft] = useState(initOptions.guessesLeft);
  const [countdown, setCountdown] = useState(initOptions.countdown);
  const [score, setScore] = useState(initOptions.score);
  const [array, setArray] = useState(initArr);
  const [correctWord, setCorrectWord] = useState(null);
  const [scrambledWord, setScrambledWord] = useState("");
  const [guess, setGuess] = useState(null);

  const userInput = useRef();

  const onSubmitHandler = (e, userText) => {
    if (userText === "") console.log("ALERTTTTTTTTTTTT!!!!!!!!!!!!1");
    console.log("On submit handler: gameStatusWas:", gameStatus);
    e.preventDefault();
    if (gameStatus === "onFirstLoad") {
      setGameStatus("setup");
    } else if (gameStatus === "reset") {
      const test = document.querySelector("input");
      setGameStatus("setup");
      console.log(test);
    } else if (gameStatus === "setup") {
      console.log("gamestatus is =>", gameStatus);
    } else if (gameStatus === "playing") {
      console.log("gamestatus is =>", gameStatus);
      setGuess(e.target.elements["input-text"].value);
    } else if (gameStatus === "ended") {
      console.log("gamestatus is:", gameStatus, correctWord);

      setCorrectWord(null);
      setGameStatus("reset");
    } else {
      throw new Error("OOOps, check status strings");
    }
  };

  //Timer ⏲️
  useEffect(() => {
    if (gameStatus === "setup") {
      console.log('activates if (gameStatus === "setup")');
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

    console.log("gameStatus useEFFECT :>> ", gameStatus);
    return () => {
      clearInterval(timer);
    };
  }, [gameStatus]);

  //Sets Word 🥉
  useEffect(() => {
    if (gameStatus === "setup") {
      console.log("on setup");
      setCorrectWord(chooseWord(array));
    }
  }, [gameStatus, array]);

  //GENERATE RANDOM NUMBER AND WORD 🧣
  useEffect(() => {
    if (correctWord && gameStatus === "setup") {
      setScrambledWord(scrambleWord(correctWord));
      setGameStatus("playing");
      console.log("SETGAMESTATUS TO PLAYING");
    }
    if (gameStatus === "ended") {
      console.log('on gameStatus "ended"');
      setGuess("what");
      setScrambledWord(correctWord);
    }
  }, [correctWord, gameStatus]);

  //GUESSES ⁉️
  useEffect(() => {
    console.log("on GUESS or CORRECT_WORD:", guess, correctWord);
    if (guess && guess !== correctWord) {
      setGuessesLeft(state => state - 1);
      console.log("WRONG GUESS, guess was", guess, "BUT WORD was", correctWord);
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

  useEffect(() => {
    console.log("scrambledWord", scrambledWord);
    console.log("------------");
  }, [scrambledWord]);

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
          <Word
            gameStatus={gameStatus}
            scrambledWord={scrambledWord}
            correctWord={correctWord}
          />
          <Form onSubmitHandler={onSubmitHandler} gameStatus={gameStatus} />
          <Instructions />
        </div>
      </main>
    </div>
  );
}

export default App;
