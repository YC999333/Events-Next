import { useRouter } from 'next/router'
import { Fragment } from 'react';
import { getEventById } from '../../dummy_data'
import EventSummary from '../../components/event-detail/event-summary'
import EventLogistics from '../../components/event-detail/event-logistics'
import EventContent from '../../components/event-detail/event-content'
import LogisticsItem from '../../components/event-detail/logistics-item'

function EventDetailPage() {
    const router = useRouter()
    const eventId = router.query.eventId;
    const event = getEventById(eventId)

    if(!event) {
        return <p>No event found!</p>
    }
 
    return (
        //needed if you have json jsx element
        <Fragment>
            <EventSummary title={event.title}/>
            <EventLogistics 
                date={event.date} 
                address={event.location} 
                image={event.image}
                imageAlt={event.title}/>
            <EventContent>
                <p>{event.description}</p>
            </EventContent>
        </Fragment>
    )
}

export default EventDetailPage
