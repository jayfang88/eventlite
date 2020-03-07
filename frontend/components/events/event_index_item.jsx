import React from 'react';
import { Link } from 'react-router-dom';

class EventIndexItem extends React.Component {
    constructor(props) {
        super(props)

    }

    combineDate(eventDate, eventTime) {
        const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

        const newDate = new Date(eventDate);
        const day = days[newDate.getDay()];
        const month = months[newDate.getMonth()];
        const date = newDate.getDate()+1;
        const time = eventTime.slice(0, -3)
        
        return `${day}, ${month} ${date}, ${time}`;
    }

    render() {
        const {event} = this.props
        return(
            <li className='event-index-item'>
                <Link to={`/events/${event.id}`}><img className='event-index-img' src={event.photoUrl} /></Link>
                <div className='event-index-item-textbox'>
                    <h4>{this.combineDate(event.startdate, event.starttime)}</h4>
                    <Link to={`/events/${event.id}`}><h3>{event.title}</h3></Link>
                    <p>{event.location}</p>
                </div>
            </li>
        )
    }
};

export default EventIndexItem;