import React from 'react';
import EventIndexContainer from '../events/event_index_container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';


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
                        <img id='splash-image' src="https://eventlite-fsp-dev.s3-us-west-1.amazonaws.com/concert.jpg" alt="splash-image"/>
                        <div id='made-for'>Made for</div>
                        <div id='those-who'>those who do</div>
                    </div>   
                </div>
                {/* <div id='search-box'>
                    <h5 className='searchbox-label'>I want to go out</h5>
                    <select className='searchbox-dropdown'>
                        <option value="any date">Any Date</option>
                        <option value="today">Today</option>
                        <option value="tomorrow">Tomorrow</option>
                        <option value="this weekend">This Weekend</option>
                        <option value="this week">This Week</option>
                        <option value="next week">Next Week</option>
                        <option value="this month">This Month</option>
                        <option value="next month">Next Month</option>
                        <option value="pick date">Pick a date...</option>
                    </select>
                    <h5 className='searchbox-label'>In</h5>
                    <input className='searchbox-input' type="text" placeholder='Search City'/>
                    <h5 className='searchbox-label'>And I'm in the mood for</h5>
                    <select className='searchbox-dropdown'>
                        <option value="anything">Anything</option>
                        <option value="Business &amp; Professional">Business &amp; Professional</option>
                        <option value="Community &amp; Culture">Community &amp; Culture</option>
                        <option value="Family &amp; Education">Family &amp; Education</option>
                        <option value="Food &amp; Drink">Food &amp; Drink</option>
                        <option value="Health &amp; Wellness">Health &amp; Wellness</option>
                        <option value="Hobbies &amp; Special Interest">Hobbies &amp; Special Interest</option>
                        <option value="Music">Music</option>
                        <option value="Other">Other</option>
                        <option value="Sports &amp; Fitness">Sports &amp; Fitness</option>
                        <option value="Travel &amp; Outdoor">Travel &amp; Outdoor</option>
                    </select>
                    <FontAwesomeIcon className='searchbox-arrow' icon={faArrowAltCircleRight} />
                </div> */}
                <div id='splash-body'>
                    <EventIndexContainer path={this.props.path}/>
                </div>
            </div>
        )
    }
};

export default Splash;