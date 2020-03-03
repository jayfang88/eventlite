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
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        )
    }

    render() {
        return(
            <div id='signup-form-container'>
                <h2>Welcome</h2>
                <p>Create an account.</p>
                {this.renderErrors()}
                <form onSubmit={this.handleSubmit}>
                    <label>Email address
                        <input type="text" value={this.state.email} onChange={this.update('email')} />
                    </label>
                    <br/>
                    <label>First Name
                        <input type="text" value={this.state.fname} onChange={this.update('fname')} />
                    </label>
                    <br/>
                    <label>Last Name
                        <input type="text" value={this.state.lname} onChange={this.update('lname')} />
                    </label>
                    <br/>
                    <label>Password
                        <input type="password" value={this.state.password} onChange={this.update('password')} />
                    </label>
                    <br/>
                    <input type="submit" value='Sign Up'/>
                </form>

                <Link to='/login'>Log In Instead</Link>
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