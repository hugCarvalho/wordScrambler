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
import Audio from "./components/Audio/Audio";
import HighScores from "./components/Scoreboard/HighScores";
// import Scoreboard, { Top10 } from "./components/Scoreboard/Scoreboard";
// import Backdrop from "./components/Backdrop/Backdrop";
// import AnimationsDisplay from "./components/AnimationsDisplay/AnimationsDisplay";
// import WarningHandling from "./components/WarningHandling/WarningHandling";

//TODO: accessibility checklist
//TODO: validation- word must be at least 2 letters
//TODO: refactor
//TODO: change handling of options obj to reducer

const initHighScores = {
  easy: [],
  medium: [],
  hard: [],
  all: [],
};
const initScores = {
  easy: [
    // {
    //   id: 1,
    //   date: Date.now(),
    //   score: 100,
    // },
    // {
    //   id: 2,
    //   date: Date.now(),
    //   score: 200,
    // },
  ],
  medium: [],
  hard: [],
  all: [],
};

function App() {
  //OPTIONS + DATA
  const [options, setOptions] = useState(gameOptions);
  const [array, setArray] = useState(initArr);
  const [allScores, setAllScores] = useState(initScores);
  const [updatedAllScores, setUpdatedAllScores] = useState(initScores);
  const [difficulty, setDifficulty] = useState("all");
  //MAIN STATE
  const [gameStatus, setGameStatus] = useState("onLoad"); // "onLoad", "playing", "ended"
  //IN GAME VARIABLES
  const [guessesLeft, setGuessesLeft] = useState(gameOptions.totalGuessesLeft);
  const [countdown, setCountdown] = useState(gameOptions.countdown);
  const [correctWord, setCorrectWord] = useState(null);
  const [scrambledWord, setScrambledWord] = useState("");
  const [guess, setGuess] = useState(null);
  //GAME ENDED
  const [gameWon, setGameWon] = useState(null); //null, "yes", "no" -> don't change to true/false to pass only one prop
  const [score, setScore] = useState(gameOptions.score);
  const [allowHighScoreEntry, setAllowHighScoreEntry] = useState(false); //prevents automatic highscore entry when changing level
  //SCOREBOARD
  // const [highScoreTables, setScoreboard] = useState([]);
  //MODAL
  // const [modalMessage, setModalMessage] = useState("Testing modal message");
  // const [showModal, setShowModal] = useState(false);

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
  useEffect(() => {
    if (localStorage.highScoreTables) {
      setUpdatedAllScores(JSON.parse(window.localStorage.getItem("highScoreTables")));
    }
  }, []);

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
      setAllowHighScoreEntry(true);
      //setAllScores({ id: allScores + 1, date: Date.now(), score: score });
    }
    console.log(gameStatus);
  }, [correctWord, countdown, gameStatus, guessesLeft, options]);

  useEffect(() => {
    if (gameWon === "yes" && allowHighScoreEntry) {
      let scores = { ...allScores };
      scores[difficulty].push({
        id: Math.random(), //TODO: change to uuid?
        date: new Date().toLocaleDateString("de-DE"),
        score: score,
      });
      //console.log("Add game score to", scores[difficulty], scores);
      setUpdatedAllScores(scores);
    }
  }, [gameWon, score, difficulty, allScores, allowHighScoreEntry]);

  useEffect(() => {
    setAllowHighScoreEntry(false);
  }, [updatedAllScores]);

  //LOCALSTORGAGE ⏩ SET
  useEffect(() => {
    window.localStorage.setItem("highScoreTables", JSON.stringify(updatedAllScores));
    //console.log("3", updatedAllScores);
  }, [updatedAllScores]);

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
  //   // console.log("highScoreTables", highScoreTables);
  //   //console.log("------------");
  // }, [highScoreTables]);

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
      {/* <Top10 highScoreTables={highScoreTables} /> */}
      {/* <Scoreboard highScoreTables={highScoreTables} /> */}
      {/* {showModal && <Backdrop modalStatus={false}>{modalMessage} </Backdrop>} */}
      <Audio
        gameWon={gameWon}
        soundOptions={options.soundOn}
        setSoundOptions={() =>
          setOptions(state => {
            const copyObj = { ...state };
            copyObj.soundOn = !copyObj.soundOn;
            return copyObj;
          })
        }
      />
      <HighScores
        updatedAllScores={updatedAllScores}
        difficulty={difficulty}
        numEntries={options.displayHighScores.numEntries}
      />
    </div>
  );
}

export default App;
