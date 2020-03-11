import React from 'react';
import { Link } from 'react-router-dom';

class TicketIndexItem extends React.Component {
    constructor(props) {
        super(props)
    }

    combineDate(eventDate, eventTime) {
        const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

        const newDate = new Date(eventDate);
        const day = days[newDate.getDay()];
        const month = months[newDate.getMonth()];
        const date = newDate.getDate() + 1;
        const time = eventTime.split(' ').join('').toLowerCase();

        return `${day}, ${month} ${date}, ${time}`;
    }

    render() {
        const { event } = this.props

        let newDate = new Date(event.startdate);
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        let mon = months[newDate.getMonth()].toUpperCase();
        let date = newDate.getDate() + 1;
        
        return(
            <div id='ticket-item'>
                <div id='ticket-item-date'><h5>{mon}</h5> <p>{date}</p></div>
                <Link to={`/e/${event.id}`}><img className='ticket-img' src={event.photoUrl} alt='ticket-photo'/></Link>
                <div id='ticket-item-info'>
                    <Link to={`/e/${event.id}`}><div id='ticket-item-title'>{event.title}</div></Link>
                    <div id='ticket-item-infodate'>{this.combineDate(event.startdate, event.starttime)}</div>
                </div>
            </div>
        )
    }
};

export default TicketIndexItem;