import React from 'react';
import { Link } from 'react-router-dom';

class BookmarkIndexItem extends React.Component {
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
            <div id='bookmark-item'>
                <Link to={`/e/${event.id}`}><img id='bookmark-img' src={event.photoUrl} alt='bookmark-photo' /></Link>
                <div id='bookmark-item-info'>
                    <div id='bookmark-item-date'><h5>{mon}</h5> <p>{date}</p></div>
                    <div id='bookmark-item-content'>
                        <Link to={`/e/${event.id}`}><div id='bookmark-item-title'>{event.title}</div></Link>
                        <div id='bookmark-item-infodate'>{this.combineDate(event.startdate, event.starttime)}</div>
                    </div>
                </div>
            </div>
        )
    }
};

export default BookmarkIndexItem;