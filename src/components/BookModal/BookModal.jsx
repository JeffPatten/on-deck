import React from "react";
import Ingredient from "../Ingredient/Ingredient";
import Recipe from "../Recipe";

const BookModal = (props) => {
  const { isOpen, onClose, recipes } = props;

  if (!isOpen) {
    return null;
  }


  const displayedRecipes = recipes.map((recipe)=>{
    return (
      <div>
        {/* <h2>{recipe.name}</h2>
        <ul>
          {recipe.ingredients.map((ingredient,index)=> {
            return <h4>{ingredient.name}                      {ingredient.amount}</h4>
          })}
        </ul>
        <p>{recipe.instructions}</p> */}
        <Recipe recipe={recipe} />
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
