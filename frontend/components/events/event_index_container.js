import { connect } from 'react-redux';
import { requestEvents } from '../../actions/event_actions';
import EventIndex from './event_index';

const mSTP = state => ({
    events: Object.values(state.entities.events),
    errors: state.errors.event
});

const mDTP = dispatch => ({
    requestEvents: () => dispatch(requestEvents())
})

export default connect(mSTP, mDTP)(EventIndex);