import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
// import SessionForm from './session_form';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this)
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value})
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.login(this.state)
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li className='error-message' key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        )
    }

    render() {
        return(
            <div className='signin-form-container'>
                <h2 className='signin-welcome'>Welcome back</h2>
                <br/>
                <p className='signin-message'>Please enter your password to log in.</p>
                <br/>
                {this.renderErrors()}
                <br/>
                <form className='signin-form-box'>
                    <label>Email address
                        <br/>
                        <input className='signin-input' type="text" value={this.state.email} onChange={this.update('email')} />
                    </label>
                    <br/>
                    <label>Password
                        <br/>
                        <input className='signin-input' type="password" value={this.state.password} onChange={this.update('password')} />
                    </label>
                    <br/>
                    <button className='signin-button' onClick={this.handleSubmit}>Log In</button>
                </form>
            </div>
        )
    }
};

const mSTP = state => ({
    errors: state.errors.session,
    // user: {this.props}
});

const mDTP = dispatch => ({
    login: user => dispatch(login(user))
});

export default connect(mSTP, mDTP)(LoginForm);