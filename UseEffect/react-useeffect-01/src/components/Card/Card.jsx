import React from "react";
import "./card.css";

export const Card = ({ ele }) => {
  console.log(ele);
  return (
    <div className="card">
      <h2 className="card-heading">{ele.recipe.label}</h2>
      <img src={ele.recipe.image} alt="" />
      <div className="ingredient-container">
        <ul className="ul">
          {ele.recipe.ingredientLines.map((ele) => {
            return <li>{ele}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};
