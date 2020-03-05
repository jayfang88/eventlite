import React from 'react';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';

class SessionForm extends React.Component {
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
        this.props.action(this.state)
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li className='error-message' key={`error-${i}`}>
                        {`*${error}`}
                    </li>
                ))}
            </ul>
        )
    }

    render() {
        return (
            <div className='signin-form-container'>
                <FontAwesomeIcon className='login-icon' icon={faUser} />
                <h2 className='signin-welcome'>{this.props.welcomeMessage}</h2>
                <br />
                <p className='signin-message'>{this.props.signinMessage}</p>
                <br />
                {this.renderErrors()}
                <br />
                <form className='signin-form-box'>
                    <div className='signin-input-box'><span className='signin-input-text'>Email address</span>
                        <br />
                        <input className='signin-input' type="text" value={this.state.email} onChange={this.update('email')} />
                    </div>
                    {this.props.history.location.pathname === '/signup' ? (
                        <div className='signin-input-names'>
                            <label className='signin-input-name'><span className='signin-input-text'>First Name</span>
                                <br />
                                <input className='signin-input' type="text" value={this.state.fname} onChange={this.update('fname')} />
                            </label>
                            <br />
                            <label className='signin-input-name'><span className='signin-input-text'>Last Name</span>
                                <br />
                                <input className='signin-input' type="text" value={this.state.lname} onChange={this.update('lname')} />
                            </label>
                        </div>
                    ) : (<div></div>)}
                    {this.props.history.location.pathname === '/signup' ? (<br />) : (<div></div>)}
                    <div className='signin-input-box'><span className='signin-input-text'>Password</span>
                        <br />
                        <input className='signin-input' type="password" value={this.state.password} onChange={this.update('password')} />
                    </div>
                    <br />
                    <button className='signin-button' onClick={this.handleSubmit}>{this.props.formType}</button>
                </form>
                {this.props.history.location.pathname === '/signup' ? (
                    <div className='below-submit'><Link className='below-link' to='/login'>Log In Instead</Link></div>
                ) : (
                        <div className='below-submit'><Link className='below-link' to='/forgotpassword'>Forgot Password</Link></div>
                )}
            </div>
        )
    }
};

export default SessionForm;