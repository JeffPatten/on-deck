import React from 'react'
import Invitation from './Invitation'
import Menu from './Menu'
import ShoppingList from './ShoppingList'

const Event = () => {
    //This is where the event information lives. Operates as a dashboard. Menu will be listed here. Also, the invitation component and event shopping list will live here. This will include date and time of the event, and any other pertinent details concerning the event (maybe dress code?). Could also contain number of confirmed guests.
  return (
    <div>
      <h1>Event Name</h1>
      <Invitation name={event.name} when={event.time} dress={event.dressCode}/>
      <Menu />
      <ShoppingList />
    </div>
  )
}

export default Event