import React from 'react'

const ShoppingList = () => {
    //Will be available on the kitchen component for all upcoming events and will be available in the event component as a shopping list for just that event. Will receive ingredients from the recipes on an event. 
    let shoppingList = {}

    // This is the gist of what will need to happen once you create the data structure for receipes and their ingredient lists
    recipes.map((recipe) => recipe.ingredients.forEach(ingredient => {
      if (shoppingList[ingredient]) {
        shoppingList[ingredient]++
      } else if (!shoppingList[ingredient]){
        shoppingList[ingredient] = count
      }
    }))

  return (
    <div>
      <h2></h2>
    </div>
  )
}

export default ShoppingList