import React from "react";
import "./Word.scss";
import PropTypes from "prop-types";
import style from "styled-components";

//TODO: useContext - DisplayHint - isHintAvailable

const Letter = style.span``;

function Word({ gameStatus, scrambledWord, correctWord }) {
  //Active on gameStatus "ended" only
  const [changeWordColor, setChangeWordColor] = React.useState(false);
  const [isMatchLettersActivated, setIsMatchLettersActivated] = React.useState(false);
  const link = `https://en.wikipedia.org/wiki/${scrambledWord}`;

  const showHint = (word, scrambledWord) => {
    let result = [];
    for (let i = 0; i < word.length; i++) {
      if (word[i] === scrambledWord[i]) result.push(scrambledWord[i]);
      if (word[i] !== scrambledWord[i]) result.push(scrambledWord[i].toUpperCase());
    }
    //span each letter with prop/class
    return result.map((letter, i) => {
      return letter === scrambledWord[i] ? (
        <span match>{letter}</span>
      ) : (
        <span noMatch>{letter}</span>
      );
    });
  };

  return (
    <div className="Word">
      <span aria-label="word to guess">
        {gameStatus === "onLoad" ||
        gameStatus === "scramblingWord" ||
        gameStatus === "setup" ? (
          "❓"
        ) : gameStatus === "ended" ? (
          <a
            style={changeWordColor ? { color: "pink" } : {}}
            onMouseOver={() => setChangeWordColor(true)}
            onMouseLeave={() => setChangeWordColor(false)}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {scrambledWord}
            <span className="info fas fa-info-circle" />
          </a>
        ) : (
          <>
            {isMatchLettersActivated
              ? scrambledWord
              : showHint(correctWord, scrambledWord)}
          </>
        )}
      </span>
    </div>
  );
}

Word.propTypes = {
  gameStatus: PropTypes.string.isRequired,
  scrambledWord: PropTypes.string.isRequired,
};

//ℹ️❔
//<i class="fas fa-info-circle"></i>
//<i class="fas fa-question-circle"></i>
//<i class="far fa-question-circle"></i>
export default Word;
