import { connect } from 'react-redux';
import { requestEvent, deleteEvent } from '../../actions/event_actions';
import EventShow from './event_show';

const mSTP = (state, ownProps) => {
    return{
    event: state.entities.events[ownProps.match.params.eventId],
    currentUserId: state.session.id
    }
};

const mDTP = dispatch => ({
    requestEvent: eventId => dispatch(requestEvent(eventId)),
    deleteEvent: eventId => dispatch(deleteEvent(eventId))
});

export default connect(mSTP, mDTP)(EventShow);