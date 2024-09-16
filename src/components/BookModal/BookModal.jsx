import React from "react";
import Ingredient from "../Ingredient/Ingredient";

const BookModal = (props) => {
  const { isOpen, onClose, recipes } = props;

  if (!isOpen) {
    return null;
  }


  const displayedRecipes = recipes.map((recipe)=>{
    return (
      <div>
        <h2>{recipe.name}</h2>
        <ul>
          {recipe.ingredients.map((ingredient,index)=> {
            return <h4>{ingredient.name}                      {ingredient.amount}</h4>
          })}
        </ul>
        <p>{recipe.instructions}</p>
      </div>
    )
    })

  return (
    <div onClick={onClose} className="book-modal">
      <div className="book-modal-2">
        {displayedRecipes}
      </div>
    </div>
  );
};

export default BookModal;
