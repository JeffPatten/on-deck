import React from "react";
import './Ingredient.css';

const Ingredient = (props) => {
  //Contains information. Name of ingredient and quantity, maybe food allergies.  This will live on the recipe and shopping list. Stretch goal: contains nutritional information.

  const { name, amount } = props;

  return (
      <li id='ingredient-li'>
        <p>{name}</p>
        <p>{amount}</p>
      </li>
  );
};

export default Ingredient;
