import React from "react";
import "./DisplayCategory.scss";

function DisplayCategory({ category }) {
  const capitalizeWord = word => {
    return word[0].toUpperCase() + word.slice(1);
  };

  return (
    <div className="DisplayCategory" title="category the word belongs to">
      <h2>{capitalizeWord(category)}</h2>
    </div>
  );
}

export default DisplayCategory;
