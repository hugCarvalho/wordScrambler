import React from "react";
import "./HighScores.scss";
import PropTypes from "prop-types";

function HighScores({ updatedAllScores, difficulty, numEntries, customOptions }) {
  const [highScoreTable, setHighScoreTable] = React.useState([]);
  const { defaultHighScoreEntries, showHighScore } = customOptions;

  React.useEffect(() => {
    //console.log("updatedAllScores", updatedAllScores);
    let sortedScores = [
      ...updatedAllScores[difficulty].sort((a, b) => b.score - a.score),
    ];
    while (sortedScores.length < numEntries) {
      sortedScores.push(null);
    }
    setHighScoreTable(sortedScores);
  }, [difficulty, updatedAllScores, numEntries]);

  return (
    <table className="HighScores" style={showHighScore ? {} : { display: "none" }}>
      <thead>
        <tr>
          <th className="cells" colSpan="3">
            Top {numEntries} - {difficulty}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="cells subtitle">Rank</td>
          <td className="cells subtitle">Date</td>
          <td className="cells subtitle">Score</td>
        </tr>
        {highScoreTable.map((item, i) => {
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

HighScores.propTypes = {
  updatedAllScores: PropTypes.object.isRequired,
  difficulty: PropTypes.string.isRequired,
  numEntries: PropTypes.number.isRequired,
};

export default HighScores;
