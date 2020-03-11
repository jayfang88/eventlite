import { connect } from 'react-redux';
import { requestEvent, deleteEvent } from '../../actions/event_actions';
import { createTicket, deleteTicket } from '../../actions/ticket_actions';
import { createBookmark, deleteBookmark } from '../../actions/bookmark_actions';
import EventShow from './event_show';

const mSTP = (state, ownProps) => {
    const event = state.entities.events[ownProps.match.params.eventId]
    return{
    event: event,
    currentUserId: state.session.id,
    ticketErrors: state.errors.ticket,
    bookmarked: event ? event.current_user_bookmarked : null
    }
};

const mDTP = dispatch => ({
    requestEvent: eventId => dispatch(requestEvent(eventId)),
    deleteEvent: eventId => dispatch(deleteEvent(eventId)),
    createTicket: ticket => dispatch(createTicket(ticket)),
    deleteTicket: ticketId => dispatch(deleteTicket(ticketId)),
    createBookmark: (bookmark, eventId) => dispatch(createBookmark(bookmark, eventId)),
    deleteBookmark: (bookmarkId, eventId) => dispatch(deleteBookmark(bookmarkId, eventId))
});

export default connect(mSTP, mDTP)(EventShow);