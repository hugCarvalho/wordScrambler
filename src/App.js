import { createContext, useEffect, useState } from "react";
import "./App.scss";
import Countdown from "./components/Indicators/Countdown/Countdown";
import GuessesLeft from "./components/Indicators/GuessesLeft/GuessesLeft";
import Header from "./components/Header/Header";
import UserInput from "./components/UserInput/UserInput";
import Instructions from "./components/Instructions/RenderInstructions";
import Score from "./components/Indicators/Score/Score";
import Word from "./components/Word/Word";
import chooseWord, { scrambleWord } from "./App_functions";
import GameOptionsMenu from "./components/MobileMenu/GameOptionsMenu";
import initArr, { initScores } from "./data/testData";
import GameDifficulty from "./components/GameDifficulty/GameDifficulty";
import DisplayCategory from "./components/DisplayCategory/DisplayCategory";
import Audio from "./components/Audio/Audio";
import HighScores from "./components/HighScores/HighScores";
import gameOptions from "./data/gameOptions";
import { optionsCustom } from "./data/gameOptions";
import GiveUpBtn from "./components/GiveUpBtn/GiveUpBtn";

//TODO: accessibility checklist
//TODO: change handling of options obj to reducer
//TODO: optimize performance
//TODO: refactor

export const CustomOptionsContext = createContext();

function App() {
  //DATA + OPTIONS
  const [array] = useState(initArr);
  const [allScores] = useState(initScores);
  const [updatedAllScores, setUpdatedAllScores] = useState(
    () => JSON.parse(window.localStorage.getItem("highScoreTables")) || initScores
  );
  const [options, setOptions] = useState(gameOptions);
  //MAIN STATE
  const [gameStatus, setGameStatus] = useState("onLoad"); // "onLoad", "scrambling", "playing", "ended"
  //USE CONTEXT
  const [customOptions, setCustomOptions] = useState(
    () => JSON.parse(window.localStorage.getItem("customOptions")) || optionsCustom
  );
  const [difficulty, setDifficulty] = useState(customOptions.defaultDifficulty); //easy-medium-hard-all
  //IN GAME VARIABLES
  const [guessesLeft, setGuessesLeft] = useState(gameOptions.totalGuessesLeft);
  const [countdown, setCountdown] = useState(gameOptions.countdown);
  const [correctWord, setCorrectWord] = useState(null);
  const [scrambledWord, setScrambledWord] = useState("");
  const [guess, setGuess] = useState(null);
  //GAME ENDED
  const [gameWon, setGameWon] = useState(null); //null, "yes", "no" -> don't change to true/false, falsy value is being used
  const [score, setScore] = useState(gameOptions.score);
  const [allowHighScoreEntry, setAllowHighScoreEntry] = useState(false); //prevents automatic highscore entry when changing level

  const onSubmitHandler = (e, userText) => {
    e.preventDefault();

    switch (gameStatus) {
      case "onLoad":
        setGameStatus("scramblingWord");
        //console.log("setting game status to scramblingWord");
        break;
      case "playing":
        if (userText === "") {
          return;
        } else {
          setGuess(e.target.elements["input-text"].value); //alternatively use userText
        }
        break;
      case "ended":
        setCorrectWord(null); //prevents setScrambledWord to run before time
        setGameStatus("scramblingWord");
        //console.log("setting game status to scramblingWord");
        setGameWon(null);
        break;
      default:
        throw new Error("OOOps, check status strings");
    }
  };

  //LOCALSTORAGE ⏩ GET
  // useEffect(() => {
  //   if (localStorage.highScoreTables) {
  //     setUpdatedAllScores(JSON.parse(window.localStorage.getItem("highScoreTables")));
  //   }
  //   if (localStorage.customOptions) {
  //     setCustomOptions(JSON.parse(window.localStorage.getItem("customOptions")));
  //   }
  // }, []);

  //Timer ⏲️
  useEffect(() => {
    if (gameStatus === "setup") {
      //console.log("SETUP => setting up game");
      setGuessesLeft(gameOptions.totalGuessesLeft);
      setCountdown(gameOptions.countdown);
      setScore(gameOptions.score);
      setGameStatus("playing");
      setAllowHighScoreEntry(true);
    }

    let timer;
    if (gameStatus === "playing") {
      timer = setInterval(() => {
        setCountdown(state => state - 1);
      }, 1000);
    }
    //console.log("gameStatus useEFFECT :>> ", gameStatus);
    return () => {
      clearInterval(timer);
    };
  }, [gameStatus]);

  //Sets correct Word 🥉
  useEffect(() => {
    if (gameStatus === "scramblingWord") {
      setCorrectWord(null);
      setCorrectWord(chooseWord(array, difficulty));
    }
  }, [gameStatus, array, difficulty]);

  //sets scrambled word 🧣
  useEffect(() => {
    if (correctWord && gameStatus === "scramblingWord") {
      setScrambledWord(scrambleWord(correctWord));
      setGameStatus("setup");
      //console.log("setting gameStatus to SETUP");
    }
    if (gameStatus === "ended") {
      setScrambledWord(correctWord);
      setGuess("");
    }
  }, [correctWord, gameStatus]);

  //GUESSES ⁉️
  useEffect(() => {
    if (gameStatus === "playing" && guess && guess !== correctWord) {
      setGuessesLeft(state => state - 1);
      // console.log("WRONG GUESS, guess was", guess, "BUT WORD was", correctWord);
    }
    if (gameStatus === "playing" && guess && guess === correctWord) {
      //console.log("Correct Word", correctWord, "guess", guess);
      setGameStatus("ended");
      //console.log("setting gameStatus to ENDED")
    }
    //console.log("on GUESS or CORRECT_WORD:", guess, correctWord);
  }, [gameStatus, guess, correctWord]);

  //GAME LOST GUESSES LEFT ARE 0 💥
  useEffect(() => {
    if (guessesLeft === 0) {
      setGameStatus("ended");
      setGameWon("no");
      //console.log("setting gameStatus to ENDED");
    }
  }, [guessesLeft]);

  //GAME LOST - COUNTDOWN GETS TO 0 💥
  useEffect(() => {
    if (countdown < 1) {
      setGameStatus("ended");
      setGameWon("no");
    }
    //console.log("setting gameStatus to ENDED");
  }, [countdown]);

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

  //HIGHSCORE 💯
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
      setAllowHighScoreEntry(false);
    }
  }, [gameWon, score, difficulty, allScores, allowHighScoreEntry]);

  //LOCALSTORGAGE ⏩ SET
  useEffect(() => {
    window.localStorage.setItem("highScoreTables", JSON.stringify(updatedAllScores));
  }, [updatedAllScores]);

  useEffect(() => {
    window.localStorage.setItem("customOptions", JSON.stringify(customOptions));
    //console.log("customOptions", customOptions);
  }, [customOptions]);

  // useEffect(() => {
  //   console.log("CUSTOmOPTIONS", customOptions);
  // }, [customOptions]);

  useEffect(() => {
    //console.log("gameWon", gameWon);
  }, [gameWon]);

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
            setGuessesLeft={setGuessesLeft}
            countdown={countdown}
            options={options}
          />

          <Instructions
            gameWon={gameWon}
            gameStatus={gameStatus}
            customOptions={customOptions}
          />
        </div>
      </main>
      <section className="game-options">
        <CustomOptionsContext.Provider
          value={{
            customOptions,
            setCustomOptions,
          }}
        >
          <GameOptionsMenu
            options={customOptions}
            toggleShowInstructionsOnLoad={() => {}}
          />
        </CustomOptionsContext.Provider>

        <Audio
          gameWon={gameWon}
          soundOn={customOptions.soundOn}
          // setSoundOptions={() => console.log("CLICKED")}
          setSoundOptions={() =>
            setCustomOptions(state => {
              return { ...state, soundOn: !state.soundOn };
            })
          }
        />
      </section>
      <section>
        <HighScores
          updatedAllScores={updatedAllScores}
          difficulty={difficulty}
          customOptions={customOptions}
          numEntries={customOptions.defaultHighScoreEntries}
        />
      </section>
    </div>
  );
}

export default App;
