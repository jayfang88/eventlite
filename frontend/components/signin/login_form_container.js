import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import SessionForm from './session_form';

const mSTP = state => ({
    errors: state.errors.session,
    formType: 'Log In',
    welcomeMessage: 'Welcome back',
    signinMessage: 'Please enter your password to log in.'
});

const mDTP = dispatch => ({
    action: user => dispatch(login(user)),
    login: user => dispatch(login(user))
});

export default connect(mSTP, mDTP)(SessionForm);