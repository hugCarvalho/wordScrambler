import React from "react";
import "./Scoreboard.scss";

const DUMMY_DATA = [
  {
    number: 1,
    date: "12-12-20",
    score: 10,
  },
  {
    number: 2,
    date: "21-12-21",
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

const showNumberOfScores = 10;
const DUMMY_SCORES = [4, 7, 2, 5].sort((a, b) => b - a);

export function Top10() {
  return (
    <div className="Top10">
      <div className="wrapper__table">
        <div className="rank-numbers"></div>
        <ul>
          <li>
            <span>Top 10</span>
          </li>
          {DUMMY_SCORES.map((score, i) => {
            return (
              <li>
                <span key={i}>{i + 1}. </span>
                <span>{DUMMY_SCORES[i]}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Scoreboard;
