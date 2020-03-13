import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = () => {

    return (
        <div>
            <h1>Welcome to Eventlite</h1>
            <h3>Are you 18 or older?</h3>
            <div><Link to='/events/all'>Yes</Link></div>
            <div>No</div>
        </div>
    )

};

export default Greeting;