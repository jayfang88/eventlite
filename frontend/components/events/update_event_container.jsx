import React from 'react';
import { connect } from 'react-redux';
import { updateEvent, requestEvent } from '../../actions/event_actions';
import EventForm from './event_form';

class UpdateEventForm extends React.Component {
    componentDidMount() {
        this.props.requestEvent(this.props.event.id)
    }

    render() {
        const {event, errors, formType, submitEvent } = this.props;

        if (!event) return null
        return (
            <EventForm event={event} errors={errors} formType={formType} submitEvent={submitEvent} />
        )
    }
}

const mSTP = (state, ownProps) => {
    return {
    event: state.entities.events[ownProps.match.params.eventId],
    errors: state.errors.event,
    formType: 'Edit Event'
    }
};

const mDTP = dispatch => ({
    submitEvent: event => dispatch(updateEvent(event)),
    requestEvent: eventId => dispatch(requestEvent(eventId))
});

export default connect(mSTP, mDTP)(UpdateEventForm);