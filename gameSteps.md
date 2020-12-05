# GameStatus => "idle"

# onSubmitHandler: gameStatus => "setup"

- setGuessesLeft(initOptions.guessesLeft);
- setCountdown(initOptions.countdown);
- setScore(initOptions.score);
- setCorrectWord(chooseWord(array));

# CorrectWord

- setScrambledWord(scrambleWord(correctWord))
- setGameStatus("playing");

# onSubmitHandler: gameStatus = "playing"

- setGuess(e.target.elements["input-text"].value);

# guess, correctWord

```
    if (guess && guess !== correctWord) {
      setGuessesLeft(state => state - 1);
    }
    if (correctWord && guess === correctWord) {
      setScore(100);
      setGameStatus("ended");
    }
```

# guessesLeft

- if (guessesLeft === 0) setGameStatus("ended");

# countdown

- if (countdown < 1) setGameStatus("ended")

# onSubmitHandler: gameStatus = "playing"

- setCorrectWord(null);
- setGameStatus("setup");
