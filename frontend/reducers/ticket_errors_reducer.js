import { RECEIVE_TICKET, RECEIVE_TICKET_ERRORS } from '../actions/ticket_actions';

const ticketErrorsReducer = (state=[], action) => {
    switch(action.type) {
        case RECEIVE_TICKET:
            return []
        case RECEIVE_TICKET_ERRORS:
            return action.errors
        default:
            return state
    }
};

export default ticketErrorsReducer;