import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return this.props.currentUser ? (
            (
                <div>
                    <h1>Hello {this.props.currentUser.email}</h1>
                    <button onClick={() => this.props.logout()}>Log out</button>
                </div>
            )
        ) : (
                (
                    <div>
                        <Link to='/signup'>Sign Up</Link>
                        <br />
                        <Link to='/login'>Log In</Link>
                    </div>
                )
            )
    }

};

export default Greeting;