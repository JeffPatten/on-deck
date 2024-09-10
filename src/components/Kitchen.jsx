import React from 'react'
import ShoppingList from './ShoppingList'
import Bookshelf from './Bookshelf'
import Calendar from './Calendar'
import dummyData from './dummyData'

const Kitchen = () => {
    //This will be the dashboard for a user. They will be able to see their cookbooks, events, and shopping list from here. They will also be able to create new recipes, new cookbooks, and new events.
  const {recipes, cookbooks, events} = dummyData;
  return (
    <div>
      <ShoppingList recipes={recipes}/>
      <Bookshelf cookbooks={cookbooks} />
      <Calendar events={events}/>
    </div>
  )
}

export default Kitchen