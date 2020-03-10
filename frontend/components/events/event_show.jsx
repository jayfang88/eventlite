import React from 'react';
import { Link } from 'react-router-dom';
// import { faThList } from '@fortawesome/free-solid-svg-icons';

class EventShow extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.requestEvent(this.props.match.params.eventId)
    }

    convertDate(eventDate) {
        const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

        let fullDate = new Date(eventDate);
        let day = days[fullDate.getDay()];
        let month = months[fullDate.getMonth()];
        let date = fullDate.getDate();
        let yr = fullDate.getFullYear();

        let combined = `${day}, ${month} ${date}, ${yr}`;
        return combined;
    }

    render() {
        // debugger;
        const {event} = this.props;
        if (!event) return null;

        let newDate = new Date(event.startdate);
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        let mon = months[newDate.getMonth()];
        let date = newDate.getDate();

        return(
            <div id='event-show'>
                <div id='event-show-bg-container'>
                    <img id='event-show-bg' src={event.photoUrl} alt='event-img'/>
                </div>
                
                <div id='event-show-main'>
                    <div id='event-show-head'>
                        <img id='event-show-img' src={event.photoUrl} alt='event-img'/>
                        <div id='event-show-head-text'>
                            <div id='eshd'>
                                <p id='eshdm'>{mon}</p>
                                <p id='eshdd'>{date}</p>
                            </div>
                            <h2 id='esht'>{event.title}</h2>
                            <p id='esho'>by {event.organizer.fname} {event.organizer.lname}
                                {(this.props.currentUserId === event.organizer.id) ? (<span id='edit-event-link'><Link to={`/e/${event.id}/edit`}>Edit Your Event</Link></span>) : ''}
                            </p>
                        </div>
                    </div>

                    <div id='event-show-save'>
                        <div id='es-likes-container'>
                            {/* <button onClick={() => this.props.deleteEvent(event.id)}>Delete Event</button> */}
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
                                <p>{this.convertDate(event.startdate)}, {event.starttime} - </p>
                                <p>{this.convertDate(event.enddate)}, {event.endtime} PST</p>
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