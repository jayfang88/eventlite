import * as EventApiUtil from '../util/event_api_util';

export const RECEIVE_EVENTS = 'RECEIVE_EVENTS';
export const RECEIVE_EVENT = 'RECEIVE_EVENT';
export const REMOVE_EVENT = 'REMOVE_EVENT';
export const RECEIVE_EVENT_ERRORS = 'RECEIVE_EVENT_ERRORS';

const receiveEvents = events => ({
    type: RECEIVE_EVENTS,
    events
});

const receiveEvent = event => ({
    type: RECEIVE_EVENT,
    event
});

const removeEvent = eventId => ({
    type: REMOVE_EVENT,
    eventId
});

const receiveErrors = errors => ({
    type: RECEIVE_EVENT_ERRORS
    errors
})

export const requestEvents = () => (
    EventApiUtil.fetchEvents
        .then(events => dispatch(receiveEvents(events)))
);

export const requestEvent = eventId => (
    EventApiUtil.fetchEvent(eventId)
        .then(event => dispatch(receiveEvent(event)))
);

export const createEvent = event => (
    EventApiUtil.createEvent(event)
        .then(event => (
            dispatch(receiveEvent(event))
        ), err => (
            dispatch(receiveErrors(err.responseJSON))
        ))
);

export const updateEvent = event => (
    EventApiUtil.updateEvent(event)
        .then(event => (
            dispatch(receiveEvent(event))
        ), err => (
            dispatch(receiveErrors(err.responseJSON))
        ))
);

export const deleteEvent = eventId => (
    EventApiUtil.deleteEvent(eventId)
        .then(() => dispatch(removeEvent(eventId)))
);