import React from "react";
import "./Scoreboard.scss";
import "./HighScores.scss";

const DUMMY_DATA = [
  {
    number: 1,
    date: "12-12-20",
    score: 10,
  },
  {
    number: 2,
    date: "05-12-22",
    score: 111,
  },
  {
    number: 3,
    date: "21-12-21",
    score: 23,
  },
];

function Scoreboard() {
  return (
    <div className="Scoreboard">
      <ul>
        {DUMMY_DATA.map(item => {
          return (
            <li key={item.number}>
              <span>Nr°{item.number}.</span> - <span>{item.date}</span> -
              <span>{item.score}</span>
            </li>
          );
        }).reverse()}
      </ul>
    </div>
  );
}

export function Top10({ scoreboard }) {
  let len = scoreboard.length;
  if (len < 10) {
    while (scoreboard.length < 10) {
      scoreboard.push(null);
    }
  }

  return (
    <div className="Top10">
      <div className="wrapper__table">
        <div className="rank-numbers"></div>
        <ul>
          <li>
            <span>Top 10</span>
          </li>
          {scoreboard.map((score, i) => {
            return (
              <li key={i}>
                <span>{i + 1}. </span>

                <span>{score || 0}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

//TODO: optimize fns

export function HighScores({ allScores, difficulty }) {
  // console.log(allScores);
  let [scoreboard, setScoreboard] = React.useState([]);

  React.useEffect(() => {
    let res = [...allScores[difficulty].sort((a, b) => a - b)];
    while (res.length < 10) {
      res.push(null);
    }

    console.log("RES", res);
    setScoreboard(res);
  }, [difficulty, allScores]);

  React.useEffect(() => {
    console.log("SCOREBOARD", scoreboard.length);

    //sortArr(scoreboard);
    // console.log("SORT", scoreboard);
  }, [scoreboard]);

  console.log(scoreboard);
  // scoreboard.sort((a, b) => a - b);
  //console.log("ALL SCORES", scoreboard);

  // React.useEffect(() => {
  //   let highScoresTable = scoreboard;

  //   let gameScore;
  //   //allScores.sort((a, b) => b.score - a.score);

  //   console.log(scoreboard);
  // }, [allScores, scoreboard]);

  return (
    <table className="HighScores">
      <thead>
        <tr>
          <th className="cells" colSpan="3">
            Top 10 - {difficulty}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="cells subtitle">Rank</td>
          <td className="cells subtitle">Date</td>
          <td className="cells subtitle">Score</td>
        </tr>
        {scoreboard &&
          scoreboard.map((item, i) => {
            return (
              <tr key={i}>
                <td className="cells rank">{`${i + 1}.`}</td>
                <td className="cells date">{item ? item.date : "-"}</td>
                <td className="cells score">{item ? item.score : "-"}</td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
}

export default Scoreboard;
