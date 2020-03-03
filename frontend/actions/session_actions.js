import * as SessionApiUtil from '../util/session_api_util';

export const RECEIVE_USER = 'RECEIVE_USER';
export const LOGOUT_USER = 'LOGOUT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

const receiveUser = user => ({
    type: RECEIVE_USER,
    user
});

const logoutUser = () => ({
    type: LOGOUT_USER
});

const receiveErrors = errors => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
});

export const login = user => dispatch => (
    SessionApiUtil.login(user).then(user => (
        dispatch(receiveUser(user))
    ), err => (
        dispatch(receiveErrors(err.responseJSON))
    ))
);

export const logout = () => dispatch => (
    SessionApiUtil.logout()
        .then(user => dispatch(logoutUser()))
);

export const signup = user => dispatch => (
    SessionApiUtil.signup(user).then(user => (
        dispatch(receiveUser(user))
    ), err => (
        dispatch(receiveErrors(err.responseJSON))
    ))
);