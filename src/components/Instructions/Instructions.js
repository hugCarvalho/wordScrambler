import React from "react";
import "./Instructions.scss";

//TODO: add rest instructions with scrolling to the right
//TODO: make scoring text dynamic
function Instructions() {
  const [activePage, setActivePage] = React.useState(1);

  const onClickHandler = () => {};
  const onTextPageChangeHandler = () => {
    if (activePage === 2)
      return {
        instructions: { transform: "translateX(-105%)" },
        score: { transform: "translateX(0)" },
        options: { transform: "translateX(115%)" },
      };
    if (activePage === 3)
      return {
        instructions: { transform: "translateX(-105%)" },
        score: { transform: "translateX(-105%)" },
        options: { transform: "translateX(0)" },
      };
    return { instructions: {}, score: {} };
  };

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
                <i>➕ 5 points for guess left</i>
              </li>
              <li>
                <i>➕ number of letters of the word x 10 </i>
              </li>
              <li>
                <i>➕ time remaining:</i>
              </li>

              <ul className="nested-list">
                <li>
                  <i>
                    ➖ Level <strong>Hard</strong> - remaining time x 3
                  </i>
                </li>
                <li>
                  <i>
                    ➖ Level <strong>Medium</strong> -remaining time x 2
                  </i>
                </li>
                <li>
                  <i>
                    ➖ Level <strong>Easy</strong> - remaining time
                  </i>
                </li>
              </ul>
            </ul>
          </div>

          <div className="options" style={onTextPageChangeHandler().options}>
            <b>Options:</b>{" "}
            <i>
              change several settings, like sound and costumise your experiencelike sound,{" "}
            </i>
          </div>
        </div>
      </div>
      <footer>
        {/* <span>👈🏻</span> */}
        <button
          onClick={() => setActivePage(state => state - 1)}
          style={activePage < 2 ? { visibility: "hidden", pointerEvents: "none" } : {}}
        >
          👈🏽
        </button>
        <span>{activePage}</span>
        <button
          onClick={() => setActivePage(state => state + 1)}
          style={activePage > 2 ? { visibility: "hidden", pointerEvents: "none" } : {}}
        >
          👉
        </button>
        {/* <span>👉🏿</span> */}
      </footer>
    </div>
  );
}

export default Instructions;
