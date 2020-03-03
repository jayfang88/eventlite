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
    action: user => dispatch(login(user))
});

export default connect(mSTP, mDTP)(SessionForm);



// class LoginForm extends React.Component {
//     render() {
//         return(
//             <div className='signin-form-container'>
//                 <FontAwesomeIcon className='login-icon' icon={faUser} />
//                 <h2 className='signin-welcome'>Welcome back</h2>
//                 <br/>
//                 <p className='signin-message'>Please enter your password to log in.</p>
//                 <br/>
//                 {this.renderErrors()}
//                 <br/>
//                 <form className='signin-form-box'>
//                     <label>Email address
//                         <br/>
//                         <input className='signin-input' type="text" value={this.state.email} onChange={this.update('email')} />
//                     </label>
//                     <br/>
//                     <label>Password
//                         <br/>
//                         <input className='signin-input' type="password" value={this.state.password} onChange={this.update('password')} />
//                     </label>
//                     <br/>
//                     <button className='signin-button' onClick={this.handleSubmit}>Log In</button>
//                 </form>
//             </div>
//         )
//     }
// };