import React from "react";
import "./DisplayCategory.scss";

function DisplayCategory() {
  const [category, setCategory] = React.useState("Object");

  return (
    <div className="DisplayCategory">
      <h2>{category}</h2>
    </div>
  );
}

export default DisplayCategory;
