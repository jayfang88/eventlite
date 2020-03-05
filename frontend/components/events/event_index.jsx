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
                { events }
            </div>
        )
    }
};

export default EventIndex;