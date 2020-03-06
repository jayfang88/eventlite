import React from 'react';
import { Link } from 'react-router-dom';
import { faThList } from '@fortawesome/free-solid-svg-icons';

class EventShow extends React.Component {
    constructor(props) {
        super(props)

        this.state = this.props.event
    }

    componentDidMount() {
        this.props.requestEvent(this.props.match.params.eventId)
            .then(action => this.setState(action.event));
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
        if (!this.state) return null;
        const {event} = this.state;
        if (!event) return null;

        let date = new Date(event.starts);
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        let mon = months[date.getMonth()];
        let day = date.getDate();

        return(
            <div id='event-show'>
                <div id='event-show-bg-container'>
                    <img id='event-show-bg' src={event.photoUrl}/>
                </div>
                
                <div id='event-show-main'>
                    <div id='event-show-head'>
                        <img id='event-show-img' src={event.photoUrl} />
                        <div id='event-show-head-text'>
                            <div id='eshd'>
                                <p id='eshdm'>{mon.toUpperCase()}</p>
                                <p id='eshdd'>{day}</p>
                            </div>
                            <h2 id='esht'>{event.title}</h2>
                            <p id='esho'>by {event.organizer.fname} {event.organizer.lname}</p>
                        </div>
                    </div>

                    <div id='event-show-save'>
                        <div id='es-likes-container'>
                            {/* things to bookmark and purchase ticket for event */}
                        </div>
                        <div id='tickets-button-container'><button id='tickets-button'>Tickets</button></div>
                    </div>
                    <div id='event-show-content'>
                        <div id='event-show-body'>
                            <p>{event.description}</p>
                        </div>

                        <div id='event-show-aside'>
                            <div className='event-show-aside-container'>
                                <h2>Date and Time</h2>
                                <p>{this.convertDate(event.starts)} - </p>
                                <p>{this.convertDate(event.ends)} PST</p>
                            </div>
                            <div className='event-show-aside-container'>
                                <h2>Location</h2>
                                <p>{event.location}</p>
                            </div>
                        </div>
                    </div>
                    
                    <div id='event-show-footer'>
                        <h4>{event.organizer.fname} {event.organizer.lname}</h4>
                        <p>Organizer of {event.title}</p>
                    </div>
                </div>
                <div id='event-show-page-footer'></div>
            </div>
        )
    }
};

export default EventShow;