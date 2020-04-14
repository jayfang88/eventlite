import React from 'react';
import EventIndexContainer from '../events/event_index_container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';


class Splash extends React.Component {
    constructor(props) {
        super(props)
    };

    scrollDown() {
        window.scrollTo({
            top: 700,
            behavior: 'smooth'
        })
    }

    render() {
        return(
            <div id='splash-container'>
                <div id='splash'>
                    <div id='splash-bg-image'></div>
                    <div id='splash-main'>
                        <img id='splash-image' src="https://eventlite-fsp-dev.s3-us-west-1.amazonaws.com/concert.jpg" alt="splash-image"/>
                        <div className='splash-text'>
                            <div id='made-for'>Made for</div>
                            <div id='those-who'>those who do</div>
                            <button className='browse-button'
                                    onClick={() => this.scrollDown()}>
                                Browse events
                                <FontAwesomeIcon className='searchbox-arrow'
                                    icon={faArrowAltCircleRight} />
                            </button>
                        </div>
                    </div>
                </div>

                <div id='splash-body'>
                    <EventIndexContainer path={this.props.path}/>
                </div>
            </div>
        )
    }
};

export default Splash;