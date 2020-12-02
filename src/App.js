import "./App.css";

function App() {
  return (
    <div className="App">
      {/* HEADER */}
      <header className="App-header">
        <h1>Word Scrambler</h1>
      </header>
      {/* Main App */}
      <main className="app">
        <div className="text">
          <span className="scrambled-w  hidden"></span>
          <span className="guesses-left hidden">
            Guesses left:
            <span className="num">3</span>
            Time: <span className="num time">30</span>
            Score: <span className="num score">100</span>
          </span>
        </div>

        <div className="output">
          <form>
            <input
              className=""
              type="text"
              id="input-text"
              autoFocus
              //disabled
              autoComplete="off"
            />
            <button type="submit">Start</button>
          </form>
        </div>

        {/* Instructions */}
        <div className="instructions">
          <p>
            <b>Instructions:</b>{" "}
            <i>
              guess the scrambled word in the least amount of guesses possible. The
              fastest you are the more points you'll get.
            </i>
          </p>
        </div>
      </main>
    </div>
  );
}

export default App;
