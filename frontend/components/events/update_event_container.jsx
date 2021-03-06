import React from 'react';
import { connect } from 'react-redux';
import { updateEvent, requestEvent } from '../../actions/event_actions';
import EventForm from './event_form';

class UpdateEventForm extends React.Component {
    componentDidMount() {
        this.props.requestEvent(this.props.match.params.eventId);
        window.scrollTo(0, 0);
    }

    render() {
        const {event, errors, formType, submitEvent } = this.props;

        if (!event) return null

        const { history } = this.props
        return (
            <EventForm history={history} event={event} errors={errors} formType={formType} submitEvent={submitEvent} />
        )
    }
}

const mSTP = (state, ownProps) => ({
    event: state.entities.events[ownProps.match.params.eventId],
    errors: state.errors.event,
    formType: 'Edit Event'
});

const mDTP = dispatch => ({
    submitEvent: event => dispatch(updateEvent(event)),
    requestEvent: eventId => dispatch(requestEvent(eventId))
});

export default connect(mSTP, mDTP)(UpdateEventForm);