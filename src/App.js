import { useEffect, useState } from "react";
import "./App.scss";
import Countdown from "./components/Indicators/Countdown/Countdown";
import GuessesLeft from "./components/Indicators/GuessesLeft/GuessesLeft";
import Header from "./components/Header/Header";
import UserInput from "./components/UserInput/UserInput";
import Instructions from "./components/Instructions/RenderInstructions";
import Score from "./components/Indicators/Score/Score";
import Word from "./components/Word/Word";
import chooseWord, { scrambleWord } from "./App_functions";
import gameOptions from "./data/gameOptions";
import initArr from "./data/testData";
import GameDifficulty from "./components/GameDifficulty/GameDifficulty";
import DisplayCategory from "./components/DisplayCategory/DisplayCategory";
import Audio from "./Audio";
// import Scoreboard, { Top10 } from "./components/Scoreboard/Scoreboard";
// import Backdrop from "./components/Backdrop/Backdrop";
// import AnimationsDisplay from "./components/AnimationsDisplay/AnimationsDisplay";
// import WarningHandling from "./components/WarningHandling/WarningHandling";

//TODO: delay appearance of scrambled word -first scramble then show
//TODO: accessibility checklist
//TODO: validation- word must be at least 2 letters
//TODO: lowercase correct word
//TODO: refactor

function App() {
  //OPTIONS + DATA
  const [options, setOptions] = useState(gameOptions);
  const [array, setArray] = useState(initArr);
  //MAIN STATE
  const [gameStatus, setGameStatus] = useState("onLoad"); // "onLoad", "playing", "ended"
  const [difficulty, setDifficulty] = useState("all");
  //IN GAME VARIABLES
  const [guessesLeft, setGuessesLeft] = useState(gameOptions.totalGuessesLeft);
  const [countdown, setCountdown] = useState(gameOptions.countdown);
  const [score, setScore] = useState(gameOptions.score);
  const [correctWord, setCorrectWord] = useState(null);
  const [scrambledWord, setScrambledWord] = useState("");
  const [guess, setGuess] = useState(null);
  //SCOREBOARD
  // const [scoreboard, setScoreboard] = useState([]);
  //MODAL
  // const [modalMessage, setModalMessage] = useState("Testing modal message");
  // const [showModal, setShowModal] = useState(false);
  const [gameWon, setGameWon] = useState(null); //null, "yes", "no" -> don't change to true/false to pass only one prop

  // const [warning, setWarning] = ""; //emptyString
  const onSubmitHandler = (e, userText) => {
    e.preventDefault();

    switch (gameStatus) {
      case "onLoad":
        //console.log("SETTING game status to scrambling");
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
        setCorrectWord(null); //prevents setScrambledWord to run before time
        setGameStatus("scramblingWord");
        setGameWon(null);
        break;
      default:
        throw new Error("OOOps, check status strings");
    }
  };

  //LOCALSTORAGE ⏩ GET
  // useEffect(() => {
  //   if (localStorage.scoreboard) {
  //     setScoreboard(JSON.parse(window.localStorage.getItem("scoreboard")));
  //   }
  // }, []);

  //Timer ⏲️
  useEffect(() => {
    if (gameStatus === "setup") {
      //console.log("SETUP => setting up game");
      setGuessesLeft(gameOptions.totalGuessesLeft);
      setCountdown(gameOptions.countdown);
      setScore(gameOptions.score);
      //setGameWon(null);
      // setShowModal(false);
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
    //console.log("gameStatus useEFFECT :>> ", gameStatus);
    return () => {
      clearInterval(timer);
    };
  }, [gameStatus]);

  //Sets Word 🥉
  useEffect(() => {
    if (gameStatus === "scramblingWord") {
      setCorrectWord(null);
      setCorrectWord(chooseWord(array, difficulty));
    }
  }, [gameStatus, array, difficulty]);

  //GENERATE RANDOM NUMBER AND WORD 🧣
  useEffect(() => {
    if (correctWord && gameStatus === "scramblingWord") {
      //console.log("scramblingWord", gameStatus);
      setScrambledWord(scrambleWord(correctWord));
      setGameStatus("setup");
      //console.log("SETGAMESTATUS TO PLAYING");
    }
    if (gameStatus === "ended") {
      // console.log('on gameStatus "ended"');
      setScrambledWord(correctWord);
      setGuess("");
      // setModalMessage("game over!");
      // setShowModal(true);
    }
  }, [correctWord, gameStatus]);

  //GUESSES ⁉️
  useEffect(() => {
    //console.log("on GUESS or CORRECT_WORD:", guess, correctWord);
    if (gameStatus === "playing" && guess && guess !== correctWord) {
      setGuessesLeft(state => state - 1);
      // console.log("WRONG GUESS, guess was", guess, "BUT WORD was", correctWord);
    }
    //SCORING LOGIC 🎼
    if (gameStatus === "playing" && guess && guess === correctWord) {
      //console.log("Correct Word", correctWord, "guess", guess);
      setGameStatus("ended");
    }
  }, [gameStatus, guess, correctWord]);

  //GAME ENDS 💥
  //GAME ENDS IF GUESSES LEFT ARE 0
  useEffect(() => {
    if (guessesLeft === 0) {
      setGameStatus("ended");
      setGameWon("no");
      console.log("GAME ENDED, 0 GUESSES LEFT: ", guessesLeft);
    }
  }, [guessesLeft]);
  //GAME ENDS IF COUNTDOWN GETS TO 0 💥
  useEffect(() => {
    if (countdown < 1) {
      setGameStatus("ended");
      console.log("TIME IS UP!!!", countdown);
      setGameWon("no");
    }
  }, [countdown]);

  useEffect(() => {
    if (gameStatus === "ended") {
      // console.log(`Game over, you ${guessesLeft > 0 && countdown > 0 ? "WON" : "LOST"}`);
    }
  }, [gameStatus, guessesLeft, countdown]);

  //GAME WON 🏆
  useEffect(() => {
    if (gameStatus === "ended" && guessesLeft !== 0 && countdown > 0) {
      setGameWon("yes");
      setScore(
        countdown * options.pointsPerTimeLeft +
          guessesLeft * options.pointsPerGuessLeft +
          correctWord.length * options.pointsPerWordLength
      );
    }
  }, [correctWord, countdown, gameStatus, guessesLeft, options]);

  //LOCALSTORGAGE ⏩ SET
  // useEffect(() => {
  //   let updatedScoreboard = scoreboard;
  //   //console.log("1", updatedScoreboard);
  //   if (gameStatus === "ended" && score > 0) {
  //     const minScore = Math.min(...scoreboard);
  //     if (scoreboard.length < 10) {
  //       updatedScoreboard.push(score);
  //       updatedScoreboard.sort((a, b) => b - a);
  //     }
  //     if (scoreboard.length >= 10 && score > minScore) {
  //       updatedScoreboard.push(score);
  //       updatedScoreboard.sort((a, b) => b - a);
  //       updatedScoreboard.pop();
  //     }
  //     if (score <= 0) return;
  //     setScoreboard(updatedScoreboard);
  //     window.localStorage.setItem("scoreboard", JSON.stringify(updatedScoreboard));
  //   }
  //   //console.log("3", updatedScoreboard);
  // }, [gameStatus, score, scoreboard]);

  useEffect(() => {
    //console.log("score", score);
    //console.log("------------");
  }, [score]);
  useEffect(() => {
    //console.log("correctWord", correctWord);
    //console.log("------------");
  }, [correctWord]);
  useEffect(() => {
    //console.log("scrambledWord", scrambledWord);
    //console.log("------------");
  }, [scrambledWord]);
  // useEffect(() => {
  //   // console.log("scoreboard", scoreboard);
  //   //console.log("------------");
  // }, [scoreboard]);

  return (
    <div className="App">
      <Header />
      {/* Main App */}
      <GameDifficulty
        difficulty={difficulty}
        setDifficulty={e => setDifficulty(e.target.value)}
        gameStatus={gameStatus}
      />
      <DisplayCategory />
      <main className="container__app">
        <div className="wrapper__app">
          <div className="indicators">
            <GuessesLeft guessesLeft={guessesLeft} gameOptions={gameOptions} />
            <Countdown countdown={countdown} />
            <Score score={score} gameWon={gameWon} />
          </div>
          <Word
            gameStatus={gameStatus}
            correctWord={correctWord}
            scrambledWord={scrambledWord}
          />

          <UserInput
            onSubmitHandler={onSubmitHandler}
            gameStatus={gameStatus}
            guessesLeft={guessesLeft}
            gameWon={gameWon}
          />

          <Instructions gameWon={gameWon} gameStatus={gameStatus} />
        </div>
      </main>
      {/* <WarningHandling warning={warning} /> */}
      {/* <Top10 scoreboard={scoreboard} /> */}
      {/* <Scoreboard scoreboard={scoreboard} /> */}
      {/* {showModal && <Backdrop modalStatus={false}>{modalMessage} </Backdrop>} */}
      <Audio gameWon={gameWon} soundOptions={options.soundOn} />
    </div>
  );
}

export default App;
