import React from 'react';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this)
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value })
    }

    handleSubmit(e) {
        e.preventDefault();
        if 
    }

    render() {
        return(
            <div>
                <h2>Sign up or log in</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>Email address
                        <input type="text" value={this.state.email} onChange={this.update('email')} />
                    </label>
                </form>
            </div>
        )
    }

    
};

export default SessionForm