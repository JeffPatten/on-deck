import React from 'react'
import CookBook from './CookBook'

const Bookshelf = () => {
    //contains all cookbooks that the user has access to. Also, allows a user to create a new cook book. This component lives in the kitchen component.
    // Cookbook props will be name, id... (anything for pagination? cookbook can do a fetch with the id to get the included recipes and sort them)
  return (
    <div>
      <CookBook /> 
    </div>
  )
}

export default Bookshelf