import React from 'react';
import EventIndexItem from './event_index_item';

class EventIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.requestEvents();
    }

    render() {
        if (!this.props.events) return null;
        
        const events = this.props.events.map((event, i) => (
            <EventIndexItem key={i} event={event}/>
        ))
        return (
            <div id='event-index'>
                <div id='event-index-search'>
                    <h1 id='event-index-search-text'>Popular in</h1>
                    <input type="text" id='event-index-search-input' placeholder='San Francisco'/>
                </div>
                { events }
            </div>
        )
    }
};

export default EventIndex;