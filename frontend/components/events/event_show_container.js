import { connect } from 'react-redux';
import { requestEvent, deleteEvent } from '../../actions/event_actions';
import { createTicket } from '../../actions/ticket_actions';
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
    createTicket: ticket => dispatch(createTicket(ticket))
});

export default connect(mSTP, mDTP)(EventShow);