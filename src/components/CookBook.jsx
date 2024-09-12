import React, { useState } from 'react'
import BookModal from './BookModal'

const CookBook = (props) => {
    //Will contain a set of recipes. Can have multiple users on a cookbook (ie Family cookbook with contributors from a family to add multiple recipes). Could have tags and then use those tags as sections or bookmarks for recipes with that tag. Cookbooks will be accesible from the kitchen dashboard. You can add a recipe to an event/course from the cook book (ie, 'add to event' button that has a modal listing the events you can add it to, then select the event and it will update that event with the recipe)
const {name, bookRecipes, recipes} = props
const [bookOpen, setBookOpen] = useState(false)

const handleBookClose = () => {
  setBookOpen(false);
}

const handleBookOpen = () => {
  setBookOpen(true)
}

const recipesToDisplay = []
console.log('recipes:', recipes, 'bookRecipes:', bookRecipes)

//make the title clickable and have it open a modal with a carousel that flips pages of the cookbook and shows a recipe on each page.
  return (
    <div>
      <h2>{name}</h2>
      <BookModal isOpen={bookOpen} onClose={handleBookClose} />
    </div>
  )
}

export default CookBook