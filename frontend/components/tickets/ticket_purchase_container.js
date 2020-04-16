import { connect } from 'react-redux';
import TicketPurchase from './ticket_purchase';
import { requestEvent } from '../../actions/event_actions';
import { createTicket, deleteTicket } from '../../actions/ticket_actions';
import { withRouter } from 'react-router-dom';

const mSTP = (state, ownProps) => {
    const event = state.entities.events[ownProps.eventId]
    return {
        event,
        currentUserId: state.session.id,
        ticketErrors: state.errors.ticket,
        attending: event ? event.current_user_attending : null
    }
};

const mDTP = dispatch => ({
    createTicket: (ticket, eventId) => dispatch(createTicket(ticket, eventId)),
    deleteTicket: (ticketId, eventId) => dispatch(deleteTicket(ticketId, eventId)),
    requestEvent: eventId => dispatch(requestEvent(eventId))
});

export default withRouter(connect(mSTP, mDTP)(TicketPurchase));