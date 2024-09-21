import React from 'react'

const Course = (props) => {
    //Organizes the menu items by course if a user wants to plan multiple courses.
    const {courseInfo} = props;

  return (
    <div>
      {courseInfo.map((foodItem) => {
        return (
          <>
            <h2>{foodItem.title}</h2>
            <p>{foodItem.desciption}</p>
            <h4>{foodItem.servings}</h4>
            <h4>{foodItem?.restrictions}</h4>
          </>
        )
      })}
    </div>
  )
}

export default Course