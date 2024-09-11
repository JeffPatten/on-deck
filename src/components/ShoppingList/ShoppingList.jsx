import React from 'react'
import Ingredient from '../Ingredient/Ingredient';
import './ShoppingList.css';

const ShoppingList = (props) => {
    //Will be available on the kitchen component for all upcoming events and will be available in the event component as a shopping list for just that event. Will receive ingredients from the recipes on an event. 
    const {recipes} = props;
    let shoppingList = {}

    // console.log(recipes)
    // This is the gist of what will need to happen once you create the data structure for receipes and their ingredient lists
    recipes.map((recipe) => recipe.ingredients.forEach(ingredient => {
      if (shoppingList[ingredient.name]) {
        shoppingList[ingredient.name] += ingredient.amount
      } else if (!shoppingList[ingredient.name]){
        shoppingList[ingredient.name] = ingredient.amount
      }
    }))
    // console.log(shoppingList)

  
      let ingredients = Object.entries(shoppingList)
      // console.log('ingredients:', ingredients)
      let item = ingredients.map((ingredient) => {
        return <Ingredient name={ingredient[0]} amount={ingredient[1]} key={ingredient[0]} />
      })

    

  return (
    <div className='shopping-list'>
      <h2 id='list-header'>Shopping List</h2>
      <ul id='shopping-list-items'>
      {item}
      </ul>
    </div>
  )
}

export default ShoppingList