import React from 'react';
import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import { Link } from 'react-router-dom';
// import SessionForm from './session_form';

class SignupForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            fname: '',
            lname: '',
            password: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this)
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.signup(this.state)
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li className='error-message' key={`error-${i}`}>
                        *{error}
                    </li>
                ))}
            </ul>
        )
    }

    render() {
        return(
            <div className='signin-form-container'>
                <h2 className='signin-welcome'>Welcome</h2>
                <br/>
                <p className='signin-message'>Create an account.</p>
                <br/>
                {this.renderErrors()}
                <br/>
                <form className='signin-form-box'>
                    <label>Email address
                        <br/>
                        <input className='signin-input' type="text" value={this.state.email} onChange={this.update('email')} />
                    </label>
                    <br/>
                    <div className='signin-input-names'>
                        <label>First Name
                            <br/>
                            <input className='signin-input-name' type="text" value={this.state.fname} onChange={this.update('fname')} />
                        </label>
                        <br/>
                        <label>Last Name
                            <br/>
                            <input className='signin-input-name' type="text" value={this.state.lname} onChange={this.update('lname')} />
                        </label>
                    </div>
                    <br/>
                    <label>Password
                        <br/>
                        <input className='signin-input' type="password" value={this.state.password} onChange={this.update('password')} />
                    </label>
                    <br/>
                    <button className='signin-button' onClick={this.handleSubmit}>Sign Up</button>
                </form>

                <div id='login-instead'><Link to='/login'>Log In Instead</Link></div>
            </div>
        )
    }
};

const mSTP = state => ({
    errors: state.errors.session
});

const mDTP = dispatch => ({
    signup: user => dispatch(signup(user))
});

export default connect(mSTP, mDTP)(SignupForm);