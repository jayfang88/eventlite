import React from 'react';
import { Link } from 'react-router-dom';

const EventIndexItem = ({ event }) => {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    const hours = ['12','1','2','3','4','5','6','7','8','9','10','11']

    let fullDate = new Date(event.starts);
    let day = days[fullDate.getDay()];
    let month = months[fullDate.getMonth()];
    let date = fullDate.getDate();
    let hour = hours[fullDate.getHours()%12];
    let minutes = fullDate.getMinutes();
    if (minutes.toString().length === 1) {
        minutes = '0' + minutes.toString()
    };

    let combinedDate = `${day}, ${month} ${date}, ${hour}:${minutes}`;

    return(
        <li className='event-index-item'>
            <Link to={`/events/${event.id}`}><img className='event-index-img' src={event.photoUrl} /></Link>
            <div className='event-index-item-textbox'>
                <h4>{combinedDate}</h4>
                <Link to={`/events/${event.id}`}><h3>{event.title}</h3></Link>
                <p>{event.location}</p>
            </div>
        </li>
    )
};

export default EventIndexItem;