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
        const events = this.props.events.map((event, i) => (
            <EventIndexItem key={i} event={event}/>
        ))
        return (
            <div id='event-index'>
                <div id='event-index-search'>
                    <h1 id='event-index-search-text'>Popular in
                        <span id='event-index-search-input'>San Francisco</span>
                    </h1>
                </div>
                { events }
            </div>
        )
    }
};

export default EventIndex;