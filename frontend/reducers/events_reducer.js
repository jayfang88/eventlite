import { RECEIVE_EVENTS, RECEIVE_EVENT, REMOVE_EVENT } from '../actions/event_actions';
import { RECEIVE_BOOKMARK, REMOVE_BOOKMARK } from '../actions/bookmark_actions';
import { RECEIVE_TICKET, REMOVE_TICKET } from '../actions/ticket_actions';

const eventsReducer = (state={}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_EVENTS:
            return action.events
        case RECEIVE_EVENT:
            newState[action.event.id] = action.event
            return newState;
        case REMOVE_EVENT:
            delete newState[action.eventId]
            return newState;
        case REMOVE_BOOKMARK:
            newState[action.eventId].current_user_bookmarked = false
            newState[action.eventId].bookmarkId = null
            return newState
        case RECEIVE_BOOKMARK:
            newState[action.eventId].current_user_bookmarked = true
            newState[action.eventId].bookmarkId = action.bookmark.id
            return newState
        case RECEIVE_TICKET:
            newState[action.eventId].current_user_attending = true
            newState[action.eventId].ticketId = action.ticket.id
            return newState
        case REMOVE_TICKET:
            newState[action.eventId].current_user_attending = false
            newState[action.eventId].ticketId = null
            return newState
        default:
            return state;
    }
};

export default eventsReducer;