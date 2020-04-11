import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-regular-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { convertDate } from '../../util/time_util';

class EventShow extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.requestEvent(this.props.match.params.eventId)
        window.scrollTo(0, 0);
    }

    renderTicketErrors() {
        return (
            <ul>
                {this.props.ticketErrors.map((error, i) => (
                    <li className='error-message' key={`error-${i}`}>
                        {`*${error}`}
                    </li>
                ))}
            </ul>
        )
    }

    handleTicketButton() {
        if (this.props.currentUserId) {
            this.props.openModal('purchase', this.props.event.id);
        } else {
            this.props.history.push('/login');
        }
    }

    handleBookmark() {
        if (this.props.currentUserId) {
            if (!this.props.event.current_user_bookmarked) {
                this.props.createBookmark({
                    user_id: this.props.currentUserId,
                    event_id: this.props.event.id
                }, this.props.event.id)
            } else {
                this.props.deleteBookmark(this.props.event.bookmarkId, this.props.event.id)
            }
        } else {
            this.props.history.push('/login')
        }
    }

    render() {
        const {event, bookmarked, attending} = this.props;
        if (!event) return null;

        let newDate = new Date(event.startdate);
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        let mon = months[newDate.getMonth()];
        let date = newDate.getDate()+1;

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
                            <p id='esho'>by {event.organizerFname} {event.organizerLname}
                                {(this.props.currentUserId === event.organizer_id) ? 
                                    (<Link id='edit-event-link' to={`/e/${event.id}/edit`}>
                                        Edit Event
                                    </Link>) 
                                : ''}
                                {(this.props.currentUserId === event.organizer_id) ? 
                                    (<button id='event-show-delete-event' 
                                    onClick={() => this.props.openModal('delete', this.props.event.id)}>
                                        Delete Event
                                    </button>) 
                                : ''}
                            </p>
                        </div>
                    </div>

                    <div id='event-show-save'>
                        <div id='es-likes-container'>
                            {!bookmarked ? (
                                <button onClick={() => this.handleBookmark()} 
                                        className='es-icon-container'>
                                    <FontAwesomeIcon icon={faBookmark} id='bookmark-icon' />
                                </button>
                            ) : (
                                <button onClick={() => this.handleBookmark()}
                                        className='es-icon-container'>
                                    <FontAwesomeIcon icon={faBookmark} id='bookmarked-icon' />
                                </button>
                            )}
                            {/* <button className='es-icon-container'><FontAwesomeIcon icon={faHeart} id='like-icon' /></button> */}
                        </div>
                        <div className='tickets-button-container'>
                            <button id='tickets-button'
                                    onClick={() => this.handleTicketButton()}>
                                Tickets
                            </button>
                        </div>
                        {this.renderTicketErrors()}
                    </div>
                    <div id='event-show-content'>
                        <div id='event-show-body'>
                            <h2 className='event-show-label'>Description</h2>
                            <p id='event-show-description'>{event.description}</p>
                        </div>

                        <div id='event-show-aside'>
                            <div className='event-show-aside-container'>
                                <h2 className='event-show-label'>Date and Time</h2>
                                <p className='event-show-deets'>{convertDate(event.startdate)}, {event.starttime} - </p>
                                <p className='event-show-deets'>{convertDate(event.enddate)}, {event.endtime} PST</p>
                            </div>
                            <div className='event-show-aside-container'>
                                <h2 className='event-show-label'>Location</h2>
                                <p className='event-show-deets'>{event.location}</p>
                            </div>
                        </div>
                    </div>
                    
                    <div id='event-show-footer'>
                        <h4>{event.organizerFname} {event.organizerLname}</h4>
                        <p>Organizer of {event.title}</p>
                    </div>
                </div>
                <div id='event-show-page-footer'></div>
            </div>
        )
    }
};

export default EventShow;