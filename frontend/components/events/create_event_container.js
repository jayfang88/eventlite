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
        organizerId: state.session.id,
        category: '',
        ticketType: 'Free',
        free: true,
        paid: false
    },
    errors: state.errors.event,
    formType: 'Create Event'
});

const mDTP = dispatch => ({
    submitEvent: event => dispatch(createEvent(event))
});

export default connect(mSTP, mDTP)(EventForm);