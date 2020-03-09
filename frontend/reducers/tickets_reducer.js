import { RECEIVE_TICKET, REMOVE_TICKET } from '../actions/ticket_actions';

const ticketsReducer = (state={}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_TICKET:
            return action.ticket
        case REMOVE_TICKET:
            
    }
}