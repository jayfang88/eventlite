import React from 'react';
import { Link } from 'react-router-dom';

class EventShow extends React.Component {
    componentDidMount() {
        // debugger;
        this.props.requestEvent(this.props.match.params.eventId);
    }

    convertDate(datetime) {
        const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        const hours = ['12', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11']

        let fullDate = new Date(datetime);
        let day = days[fullDate.getDay()];
        let month = months[fullDate.getMonth()];
        let date = fullDate.getDate();
        let yr = fullDate.getFullYear();
        let hour = hours[fullDate.getHours() % 12];
        let min = fullDate.getMinutes();

        if (min.toString().length === 1) {
            min = '0' + min.toString();
        };

        let combined = `${day}, ${month} ${date}, ${yr}, ${hour}:${min}`;
        return combined;
    }

    render() {
        const {event} = this.props;
        if (!event) return null;

        return(
            <div>
                <img src={event.photoUrl}/>
                <div id='event-show-head'>
                    <h1>{event.title}</h1>
                    <p>{event.description}</p>
                </div>

                <div id='event-show-aside'>
                    <h2>Date and Time</h2>
                    <p>{this.convertDate(event.starts)} - </p>
                    <p>{this.convertDate(event.ends)} PST</p>
                    <h2>Location</h2>
                    <p>{event.location}</p>
                </div>

                <div id='event-show-footer'>
                    <h4>{event.organizer.fname} {event.organizer.lname}</h4>
                    <p>Organizer of {event.title}</p>
                </div>
            </div>
        )
    }
};

export default EventShow;