import React from 'react';
import EventIndexContainer from '../events/event_index_container';

class Splash extends React.Component {
    constructor(props) {
        super(props)
    };

    render() {
        return(
            <div id='splash-container'>
                <div id='splash'>
                    <div id='splash-bg-image'></div>
                    <div id='splash-main'>
                        <img id='splash-image' src="https://images.unsplash.com/photo-1508973379184-7517410fb0bc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3300&q=80" alt="splash-image"/>
                        <div id='made-for'>Made for</div>
                        <div id='those-who'>those who do</div>
                    </div>   
                </div>
                <div id='event-index-container'>
                    <EventIndexContainer />
                </div>
            </div>
        )
    }
};

export default Splash;