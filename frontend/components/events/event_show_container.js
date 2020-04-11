import { connect } from 'react-redux';
import { requestEvent, deleteEvent } from '../../actions/event_actions';
import { createBookmark, deleteBookmark } from '../../actions/bookmark_actions';
import EventShow from './event_show';
import { openModal, closeModal } from '../../actions/modal_actions'

const mSTP = (state, ownProps) => {
    const event = state.entities.events[ownProps.match.params.eventId]
    return{
    event: event,
    currentUserId: state.session.id,
    ticketErrors: state.errors.ticket,
    bookmarked: event ? event.current_user_bookmarked : null,
    attending: event ? event.current_user_attending : null
    }
};

const mDTP = dispatch => ({
    requestEvent: eventId => dispatch(requestEvent(eventId)),
    deleteEvent: eventId => dispatch(deleteEvent(eventId)),
    createBookmark: (bookmark, eventId) => dispatch(createBookmark(bookmark, eventId)),
    deleteBookmark: (bookmarkId, eventId) => dispatch(deleteBookmark(bookmarkId, eventId)),
    openModal: modal => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal())
});

export default connect(mSTP, mDTP)(EventShow);