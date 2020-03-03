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
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        )
    }

    render() {
        return(
            <div className='login-form-container'>
                <h2>Welcome back</h2>
                {this.renderErrors()}
                <form onSubmit={this.handleSubmit}>
                    <label>Email address
                        <input type="text" value={this.state.email} onChange={this.update('email')} />
                    </label>
                    <br/>
                    <label>Password
                        <input type="password" value={this.state.password} onChange={this.update('password')} />
                    </label>
                    <br/>
                    <input type="submit" value='Log In'/>
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