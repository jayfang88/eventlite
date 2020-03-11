import { connect } from 'react-redux';
import { requestEvent, deleteEvent } from '../../actions/event_actions';
import { createTicket } from '../../actions/ticket_actions';
import { createBookmark, deleteBookmark } from '../../actions/bookmark_actions';
import EventShow from './event_show';

const mSTP = (state, ownProps) => {
    return{
    event: state.entities.events[ownProps.match.params.eventId],
    currentUserId: state.session.id,
    ticketErrors: state.errors.ticket
    }
};

const mDTP = dispatch => ({
    requestEvent: eventId => dispatch(requestEvent(eventId)),
    deleteEvent: eventId => dispatch(deleteEvent(eventId)),
    createTicket: ticket => dispatch(createTicket(ticket)),
    createBookmark: bookmark => dispatch(createBookmark(bookmark)),
    deleteBookmark: bookmarkId => dispatch(deleteBookmark(bookmarkId))
});

export default connect(mSTP, mDTP)(EventShow);