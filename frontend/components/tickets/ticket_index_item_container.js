import { connect } from 'react-redux';
import TicketIndexItem from './ticket_index_item';

const mSTP = (state, ownProps) => ({
    ticketId: ownProps.ticketId,
    event: state.entities.events[ownProps.eventId],
    userId: ownProps.userId
});

const mDTP = dispatch => ({

});

export default connect(mSTP, mDTP)(TicketIndexItem);