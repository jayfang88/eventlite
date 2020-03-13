import React from 'react';
import EventIndexItem from '../event_index_item';

class EventIndexFiltered extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.requestEvents();
    }

    render() {
        const { indexPath, events } = this.props

        if (!events) return null;
        
        
        let filteredEvents
        switch (indexPath) {
            case 'free':
                filteredEvents = events.filter(e => e.ticket_type === 'Free')
                break;
            case 'music':
                filteredEvents = events.filter(e => e.category === 'Music')
                break;
            case 'food-drink':
                filteredEvents = events.filter(e => e.category === 'Food & Drink')
                break;
            case 'sports-fitness':
                filteredEvents = events.filter(e => e.category === 'Sports & Fitness')
                break;
            default:
                filteredEvents = events
                break;
        }

        filteredEvents = filteredEvents.map((event, i) => (
            <EventIndexItem key={i} event={event} />
        ))

        return(
            <div className='event-index'>
                { filteredEvents }
            </div>
        )
    }
};

export default EventIndexFiltered;