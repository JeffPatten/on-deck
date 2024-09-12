import React from 'react'
import Ingredient from '../Ingredient/Ingredient';
import './ShoppingList.css';

const ShoppingList = (props) => {
    //Will be available on the kitchen component for all upcoming events and will be available in the event component as a shopping list for just that event. Will receive ingredients from the recipes on an event. 

    //Should this only show the next event list or should the shopping list component be looped through in the kitchen component and have multiple 'stick notes', one for each event? **for a stretch, you could have this list be built for events, and have the option of creating your shopping list for the kitchen component...

    const {recipes} = props;
    let shoppingList = {}

    // console.log(recipes)

    /* ------------------- This list needs to come from the next upcoming event and not all recipes. You will need to adjust what data is retrieved by this component once you introduce the backend. 1) find the next event by date. 2) retrieve the recipes listed from that event. 3)sort through the recipes and create the ingredient shopping list, like the code below. 4) pass the event name and date to the shopping list to display it in the UI ----------------------- */


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