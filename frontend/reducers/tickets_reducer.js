import { RECEIVE_TICKETS, RECEIVE_TICKET, REMOVE_TICKET } from '../actions/ticket_actions';

const ticketsReducer = (state={}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_TICKETS:
            return action.tickets
        case RECEIVE_TICKET:
            newState[action.ticket.id] = action.ticket
            return newState
        case REMOVE_TICKET:
            delete newState[action.ticketId]
            return newState
        default:
            return state
    }
};

export default ticketsReducer;