import { connect } from 'react-redux';
import { createEvent } from '../../actions/event_actions';
import EventForm from './event_form';

const mSTP = (state, ownProps) => ({
    event: {
        title: '',
        location: '',
        startdate: '',
        starttime: '',
        enddate: '',
        endtime: '',
        description: '',
        organizer_id: state.session.id,
        category: '',
        ticket_type: 'Free',
        photoFile: null
    },
    errors: state.errors.event,
    formType: 'Create Event'
});

const mDTP = dispatch => ({
    submitEvent: event => dispatch(createEvent(event))
});

export default connect(mSTP, mDTP)(EventForm);