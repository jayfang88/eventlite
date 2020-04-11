import { connect } from 'react-redux';
import TicketPurchase from './ticket_purchase';
import { requestEvent } from '../../actions/event_actions';
import { createTicket, deleteTicket } from '../../actions/ticket_actions';
import { withRouter } from 'react-router-dom';

const mSTP = state => {
    const eventId = state.ui.modal.eventId
    return {
        event: state.entities.events[eventId],
        currentUserId: state.session.id,
        attending: event ? event.current_user_attending : null
    }
};

const mDTP = dispatch => ({
    createTicket: (ticket, eventId) => dispatch(createTicket(ticket, eventId)),
    deleteTicket: (ticketId, eventId) => dispatch(deleteTicket(ticketId, eventId)),
    requestEvent: eventId => dispatch(requestEvent(eventId))
});

export default withRouter(connect(mSTP, mDTP)(TicketPurchase));