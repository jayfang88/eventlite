import { connect } from 'react-redux';
import TicketPurchase from './ticket_purchase';
import { requestEvent } from '../../actions/event_actions';
import { createTicket, deleteTicket } from '../../actions/ticket_actions';
import { withRouter } from 'react-router-dom';

const mSTP = (state, ownProps) => {
    const path = ownProps.location.pathname.split('/')
    const eventId = parseInt(path[path.length -1])
    const event = state.entities.events[eventId]
    return {
        event: event,
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