import React from 'react'
import Ingredient from './Ingredient/Ingredient'

const Recipe = (props) => {
    // Will contain the actual recipe. Also will show number of servings, to be used in ensuring enough food for number of people at an event. Ingredients component will be a child component on the recipe. Recipes will be added to the cook books.

    const {recipe} = props

  return (
    <div>
      <h2>{recipe.name}</h2>
      {recipe.ingredients.map((ingredient, index) => {
        return <Ingredient name={ingredient.name} amount={ingredient.amount} key={index} />
      })}
      <p>{recipe.instructions}</p>
    </div>
  )
}

export default Recipe