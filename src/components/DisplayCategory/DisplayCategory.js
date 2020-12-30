import React from "react";
import "./DisplayCategory.scss";

function DisplayCategory() {
  const [category] = React.useState("Objects");

  return (
    <div className="DisplayCategory" title="category the word belongs to">
      <h2>{category}</h2>
    </div>
  );
}

export default DisplayCategory;
