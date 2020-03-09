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
                        <img id='splash-image' src="/assets/concert.jpg" alt="splash-image"/>
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