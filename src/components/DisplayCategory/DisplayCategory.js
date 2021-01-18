import React from "react";
import "./DisplayCategory.scss";

const changeColor = category => {
  if (category === "objects") return { color: "lightblue" };
  if (category === "animals") return { color: "orange" };
  return { color: "white" };
};

const capitalizeWord = word => {
  return word[0].toUpperCase() + word.slice(1);
};

function DisplayCategory({ category }) {
  return (
    <div className="DisplayCategory" title="category the word belongs to">
      <h2 style={changeColor(category)}>{capitalizeWord(category)}</h2>
    </div>
  );
}

export default DisplayCategory;
