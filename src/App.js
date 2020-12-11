import { useEffect, useRef, useState } from "react";
import "./App.scss";
import Countdown from "./components/Countdown/Countdown";
import GuessesLeft from "./components/GuessesLeft/GuessesLeft";
import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import Instructions from "./components/Instructions/Instructions";
import Score from "./components/Score/Score";
import Word from "./components/Word/Word";
import chooseWord, { scrambleWord } from "./functions/functions";
import Scoreboard, { Top10 } from "./components/Scoreboard/Scoreboard";
//import WarningHandling from "./components/WarningHandling/WarningHandling";

//TODO: delay appearance of scrambled word -first scramble then show
//make options obj
const initOptions = {
  guessesLeft: 3,
  countdown: 20,
  score: 0,
  pointsPerGuessLeft: 5,
  pointsPerTimeLeft: 2,
  pointsPerWordLength: 10,
};

const initArr = ["dog", "bear", "horse", "python"];
//const initArr = ["da"];

function App() {
  const [gameStatus, setGameStatus] = useState("onLoad"); // "onLoad", "playing", "ended"
  const [guessesLeft, setGuessesLeft] = useState(initOptions.guessesLeft);
  const [countdown, setCountdown] = useState(initOptions.countdown);
  const [score, setScore] = useState(initOptions.score);
  const [array, setArray] = useState(initArr);
  const [correctWord, setCorrectWord] = useState(null);
  const [scrambledWord, setScrambledWord] = useState("");
  const [guess, setGuess] = useState(null);
  const [options, setOptions] = useState(initOptions);
  const [scoreboard, setScoreboard] = useState(null);

  // const [warning, setWarning] = ""; //emptyString
  const onSubmitHandler = (e, userText) => {
    e.preventDefault();

    switch (gameStatus) {
      case "onLoad":
        console.log("SETTING game status to scrambling");
        setGameStatus("scramblingWord");
        break;
      case "playing":
        if (userText === "") {
          //setWarning("emptyString");
          return;
        } else {
          //console.log("gamestatus is =>", gameStatus);
          setGuess(e.target.elements["input-text"].value); //alternatively use userText
        }
        break;
      case "ended":
        setGameStatus("scramblingWord");
        break;
      default:
        throw new Error("OOOps, check status strings");
    }
  };

  useEffect(() => {
    if (localStorage.scoreboard) {
      setScoreboard(JSON.parse(localStorage.getItem("scoreboard")));
    }
  }, []);

  //Timer ⏲️
  useEffect(() => {
    if (gameStatus === "setup") {
      console.log("SETUP => setting up game");
      setGuessesLeft(initOptions.guessesLeft);
      setCountdown(initOptions.countdown);
      setScore(initOptions.score);
      setGameStatus("playing");
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
    if (gameStatus === "scramblingWord") {
      setCorrectWord(chooseWord(array));
    }
  }, [gameStatus, array]);

  //GENERATE RANDOM NUMBER AND WORD 🧣
  useEffect(() => {
    if (correctWord && gameStatus === "scramblingWord") {
      console.log("scramblingWord", gameStatus);
      setScrambledWord(scrambleWord(correctWord));
      setGameStatus("setup");
      console.log("SETGAMESTATUS TO PLAYING");
    }
    if (gameStatus === "ended") {
      console.log('on gameStatus "ended"');
      setGuess("");
      setScrambledWord(correctWord);
    }
  }, [correctWord, gameStatus]);

  //GUESSES ⁉️
  useEffect(() => {
    console.log("on GUESS or CORRECT_WORD:", guess, correctWord);
    if (gameStatus === "playing" && guess && guess !== correctWord) {
      setGuessesLeft(state => state - 1);
      console.log("WRONG GUESS, guess was", guess, "BUT WORD was", correctWord);
    }
    //SCORING LOGIC 🎼
    if (gameStatus === "playing" && guess && guess === correctWord) {
      console.log("Correct Word", correctWord, "guess", guess);
      setGameStatus("ended");
    }
  }, [gameStatus, guess, correctWord]);

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
    console.log("correctWord", correctWord);
    console.log("------------");
  }, [correctWord]);

  useEffect(() => {
    console.log("scrambledWord", scrambledWord);
    console.log("------------");
  }, [scrambledWord]);

  useEffect(() => {
    if (gameStatus === "ended" && correctWord) {
      setScore(
        countdown * options.pointsPerTimeLeft +
          guessesLeft * options.pointsPerGuessLeft +
          correctWord.length * options.pointsPerWordLength
      );
    }
  }, [
    correctWord,
    countdown,
    gameStatus,
    guessesLeft,
    options.pointsPerGuessLeft,
    options.pointsPerTimeLeft,
    options.pointsPerWordLength,
  ]);

  useEffect(() => {
    JSON.stringify(localStorage.setItem("scoreboard", score));
  }, [score, scoreboard]);

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
      {/* <WarningHandling warning={warning} /> */}
      <Top10 />
      <Scoreboard />
    </div>
  );
}

export default App;
