import { connect } from 'react-redux';
import { signup, login } from '../../actions/session_actions';
import SessionForm from './session_form';

const mSTP = state => ({
    errors: state.errors.session,
    formType: 'Sign Up',
    welcomeMessage: 'Welcome',
    signinMessage: 'Create an account.'
});

const mDTP = dispatch => ({
    action: user => dispatch(signup(user)),
    login: user => dispatch(login(user))
});

export default connect(mSTP, mDTP)(SessionForm);