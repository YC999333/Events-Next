import React from 'react'
import { getFeaturedEvents} from '../dummy_data'
import EventList from '../components/events/event-list'


function Homepage() {
  const featuredEvents = getFeaturedEvents();

  return (
    <div>
      <div>
        <header></header>
      </div>
      <EventList items={featuredEvents} />
    </div>
  )
}

export default Homepage
