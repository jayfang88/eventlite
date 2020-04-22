import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchTickets } from '../../actions/ticket_actions';
import { requestEvent } from '../../actions/event_actions';
import TicketShow from './ticket_show';

const mSTP = (state, ownProps) => {
    let path = ownProps.location.pathname.split('/');
    let ticketId = path[path.length-1];
    let ticket;
    let event;
    if (state.entities.tickets.tickets) {
        ticket = state.entities.tickets.tickets[ticketId];
        event = state.entities.events[ticket.event_id];
    }
    
    return{
        ticketId,
        event,
        user: state.entities.users[state.session.id]
}};

const mDTP = dispatch => ({
    fetchTickets: () => dispatch(fetchTickets()),
    requestEvent: eventId => dispatch(requestEvent(eventId))
});

export default connect(mSTP, mDTP)(TicketShow);