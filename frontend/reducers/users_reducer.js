import { RECEIVE_USER } from '../actions/session_actions';

const usersReducer = (state={}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_USER:
            let nextState = Object.assign({}, state, { [action.user.id]: action.user })
            return nextState
        default:
            return state;
    }
};

export default usersReducer;