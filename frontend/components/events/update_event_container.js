import { connect } from 'react-redux';
import { updateEvent } from '../../actions/event_actions';
import EventForm from './event_form';

const mSTP = (state, ownProps) => ({
    event: state.events[ownProps.match.params.eventId],
    formType: 'Create Event'
});

const mDTP = dispatch => ({
    submitEvent: event => dispatch(updateEvent(event))
});

export default connect(mSTP, mDTP)(EventForm);