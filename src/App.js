import { useEffect, useState } from "react";
import "./App.css";
import Countdown from "./components/Countdown/Countdown";
import GuessesLeft from "./components/GuessesLeft/GuessesLeft";
import Header from "./components/Header/Header";
import Input from "./components/Input/Input";
import Instructions from "./components/Instructions/Instructions";
import Score from "./components/Score/Score";
import Word from "./components/Word/Word";

//TODO: delay appearance of scrambled word -first scramble then show
//make options obj
const initOptions = {
  guessesLeft: 3,
  countdown: 2,
  score: 0,
};

//const initArr = ["dog", "bear", "horse", "python"];
const initArr = ["da"];

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
    const chooseWord = categoryArr => {
      const randomNum = Math.floor(Math.random() * categoryArr.length);
      const randomOriginalWord = categoryArr[randomNum];
      return randomOriginalWord;
    };
    if (gameStatus === "setup") {
      console.log("SET CORRECT WORD");
      setCorrectWord(chooseWord(array));
    }
  }, [gameStatus, array]);

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

  //GENERATE RANDOM NUMBER AND WORD 🧣
  useEffect(() => {
    // const chooseWord = categoryArr => {
    //   const randomNum = Math.floor(Math.random() * categoryArr.length);
    //   const randomOriginalWord = categoryArr[randomNum];
    //   return randomOriginalWord;
    // };
    console.log("RUN");
    //function scrambleWord(categoryArr) {
    //Sets the correct word to allow for comparison
    // const randomNum = Math.floor(Math.random() * categoryArr.length);
    // const randomOriginalWord = categoryArr[randomNum];

    //Scrambles the chosen word. If scrambled === chosen, will execute again until !==
    const scrambleWord = word => {
      console.log("HALLO?", word);
      let letters = [...word];
      let res = [];
      let i = 0;
      do {
        let chosen = letters[Math.floor(Math.random() * letters.length)];
        res.push(chosen);
        letters.splice(letters.indexOf(chosen), 1);
        i++;
      } while (i < word.length);
      let scrambledWord = res.join("");
      console.log(scrambledWord === word);
      //return;
      return scrambledWord === word ? scrambleWord(word) : scrambledWord;
    };
    // setScrambledWord(scrambleChosenWord(randomOriginalWord));
    //}
    //setCorrectWord(chooseWord(array));
    if (correctWord) {
      setScrambledWord(scrambleWord(correctWord));
      setGameStatus("playing");
      console.log("SETUP PHASE");
    }
  }, [correctWord]);

  //TIMER ⏲️
  useEffect(() => {
    //console.log("gameStatus dependency");
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
  }, [countdown]);

  useEffect(() => {
    if (gameStatus === "ended") {
      console.log(gameStatus);
      console.log(`Game over, you ${guessesLeft > 0 && countdown > 0 ? "WON" : "LOST"}`);
    }
  }, [gameStatus, guessesLeft, countdown]);

  useEffect(() => {
    //console.log("countdown :>> ", countdown);
    return () => {
      //cleanup
    };
  }, [gameStatus, countdown]);

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
