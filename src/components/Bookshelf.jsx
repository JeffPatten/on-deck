import React from 'react'
import CookBook from './CookBook'
import dummyData from './dummyData'

const Bookshelf = () => {
    //contains all cookbooks that the user has access to. Also, allows a user to create a new cook book. This component lives in the kitchen component.
    // Cookbook props will be name, id... (anything for pagination? cookbook can do a fetch with the id to get the included recipes and sort them)
    const {recipes, cookbooks} = dummyData;

    let books = cookbooks.map((book) => {
      return <CookBook name={book.name} bookRecipes={book.recipes} recipes={recipes} key={book.name}/>
    })

  return (
    <div>
      {books}
    </div>
  )
}

export default Bookshelf