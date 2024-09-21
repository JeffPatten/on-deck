import React from "react";
import Course from "./Course";

const Menu = (props) => {
  //This is where courses will be added for an event. Menu will be displayed on the event component. Courses will be displayed here. Stretch goal: create a quick event to add in the kitchen component for everyday meals (instead of an actual event with guests).
  const { courses } = props;

  return (
    <div>
      {courses.map((course, index) => {
        return (
          <Course courseInfo={course} key={index}/>
        )
      })
      }
      </div>
  );
};

export default Menu;
