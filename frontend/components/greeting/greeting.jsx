import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component {

    componentDidMount() {
        this.props.history.push('/events/all')
    }

    render () {
        return (
            <div className='greeting-container'>
                <h1 className='greeting-title'>Welcome to Eventlite</h1>
                <h3 className='greeting-question'>Are you 18 or older?</h3>
                <div className='greeting-buttons-container'>
                    <Link to='/events/all'><div className='greeting-button' id='greeting-enter'>Yes</div></Link>
                    <div className='greeting-button' id='greeting-no'>No</div>
                </div>
            </div>
        )
    }
};

export default Greeting;