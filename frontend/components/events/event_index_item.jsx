import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as reg from '@fortawesome/free-regular-svg-icons';
import * as sol from '@fortawesome/free-solid-svg-icons';

class EventIndexItem extends React.Component {
    constructor(props) {
        super(props)
    }

    combineDate(eventDate, eventTime) {
        const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

        const newDate = new Date(eventDate);
        const day = days[newDate.getDay()];
        const month = months[newDate.getMonth()];
        const date = newDate.getDate()+1;
        const time = eventTime.slice(0, -3);

        return `${day}, ${month} ${date}, ${time}`;
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
            };
        } else {
            this.props.history.push('/login');
        }
    }

    render() {
        const { event, bookmarked } = this.props;
        
        return(
            <li className='event-index-item'>
                <div id='event-index-img-container'>
                    <Link to={`/e/${event.id}`}><img 
                        className='event-index-img' src={event.photoUrl} 
                        alt='event-photo'/>
                    </Link>
                </div>
                <div className='event-index-item-textbox'>
                    <button onClick={() => this.handleBookmark()}
                        className='es-icon-container' id='eii-icon'>
                        {!bookmarked ? (
                            <FontAwesomeIcon icon={reg.faBookmark}
                            className='bookmark-icon' id='event-index-bookmark' />
                        ) : (
                            <FontAwesomeIcon icon={sol.faBookmark}
                            className='bookmarked-icon' id='event-index-bookmark' />
                        )}
                    </button>
                    <h4>{this.combineDate(event.startdate, event.starttime)}</h4>
                    <Link to={`/e/${event.id}`}><h3>{event.title}</h3></Link>
                    <p>{event.location}</p>
                </div>
            </li>
        )
    }
};

export default EventIndexItem;