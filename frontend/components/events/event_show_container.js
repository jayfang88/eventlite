import { connect } from 'react-redux';
import { requestEvent } from '../../actions/event_actions';
import { fetchTickets } from '../../actions/ticket_actions';
import { createBookmark, deleteBookmark } from '../../actions/bookmark_actions';
import EventShow from './event_show';
import { openModal, closeModal } from '../../actions/modal_actions'

const mSTP = (state, ownProps) => {
    const event = state.entities.events[ownProps.match.params.eventId];
    return{
    event,
    currentUserId: state.session.id,
    bookmarked: event ? event.current_user_bookmarked : null,
    attending: event ? event.current_user_attending : null
    }
};

const mDTP = dispatch => ({
    fetchTickets: () => dispatch(fetchTickets()),
    requestEvent: eventId => dispatch(requestEvent(eventId)),
    createBookmark: (bookmark, eventId) => dispatch(createBookmark(bookmark, eventId)),
    deleteBookmark: (bookmarkId, eventId) => dispatch(deleteBookmark(bookmarkId, eventId)),
    openModal: (modal, eventId) => dispatch(openModal(modal, eventId)),
    closeModal: () => dispatch(closeModal())
});

export default connect(mSTP, mDTP)(EventShow);