import React from "react";
import "./Instructions.scss";

//TODO: make scoring text dynamic

function Instructions({ gameStatus }) {
  const [activePage, setActivePage] = React.useState(1);
  const [showInstructions, setShowInstructions] = React.useState(true);

  const onTextPageChangeHandler = () => {
    if (activePage === 2)
      return {
        instructions: { transform: "translateX(-100%)" },
        score: { transform: "translateX(-307px)" }, //transform: width instructions text container + margin
        options: { transform: "translateX(-292px)" },
      };
    if (activePage === 3)
      return {
        instructions: { transform: "translateX(-100%)" },
        score: { transform: "translateX(-200%)" },
        options: { transform: "translateX(-599px)" },
      };
    return { instructions: {}, score: {} };
  };

  React.useEffect(() => {
    if (gameStatus === "playing") {
      setShowInstructions(false);
    }
  }, [gameStatus]);

  return (
    <div className="Instructions">
      <div className="instructions__container">
        <div className="wrapper">
          <div
            className="instructions-text"
            style={onTextPageChangeHandler().instructions}
          >
            <p>
              <b>Instructions:</b>{" "}
              <i>guess the scrambled word in the least amount of guesses possible. </i>
              <i>
                The fastest and the more accurate you are, the more points you'll get.
              </i>
            </p>
          </div>

          <div className="score" style={onTextPageChangeHandler().score}>
            <b>Score:</b>{" "}
            <ul>
              <li>
                <i>
                  <span>&#43;</span> 5 points for guess left
                </i>
              </li>
              <li>
                <i>
                  <span>&#43;</span> number of letters of the word x 10{" "}
                </i>
              </li>
              <li>
                <i>
                  <span>&#43;</span> time remaining:
                </i>
              </li>

              <ul className="nested-list">
                <li>
                  <i>
                    Level <strong>Hard</strong> - remaining time x 3
                  </i>
                </li>
                <li>
                  <i>
                    Level <strong>Medium</strong> -remaining time x 2
                  </i>
                </li>
                <li>
                  <i>
                    Level <strong>Easy</strong> - remaining time
                  </i>
                </li>
              </ul>
            </ul>
          </div>

          <div className="options" style={onTextPageChangeHandler().options}>
            <b>Word:</b>{" "}
            <i>
              once the game is over, if you don't know the meaning of the chosen word,
              click on it to be taken to its wiki page.
            </i>
          </div>
        </div>
      </div>
      <footer>
        <button
          className="turn-page"
          onClick={() => setActivePage(state => state - 1)}
          style={activePage < 2 ? { visibility: "hidden", pointerEvents: "none" } : {}}
        >
          👈
        </button>
        <span>{activePage}</span>
        <button
          className="turn-page"
          onClick={() => setActivePage(state => state + 1)}
          style={activePage > 2 ? { visibility: "hidden", pointerEvents: "none" } : {}}
        >
          👉
        </button>
      </footer>
      <div className="close-panel" style={!showInstructions ? { height: "100%" } : null}>
        <span>
          <button
            onClick={() => setShowInstructions(state => !state)}
            className={`fas fa-angle-double-down ${!showInstructions ? "open" : "close"}`}
          ></button>
          <button
            onClick={() => setShowInstructions(state => !state)}
            className={`fas fa-angle-double-up ${showInstructions ? "open" : "close"}`}
          ></button>
        </span>
      </div>
    </div>
  );
}

export default Instructions;
