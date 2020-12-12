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

export default Scoreboard;
