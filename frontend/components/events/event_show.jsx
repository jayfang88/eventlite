import React from 'react';
import { Link } from 'react-router-dom';

class EventShow extends React.Component {
    componentDidMount() {
        // debugger;
        this.props.requestEvent(this.props.match.params.eventId)
    }


    render() {
        // debugger;
        return(
            <div>
                hello
            </div>
        )
    }
};

export default EventShow;