import React from 'react';

export default class TicketShow extends React.Component {
    componentDidMount() {
        window.scrollTo(0,0);
        this.props.fetchTickets();
    }
    
    render() {
        const { user, event } = this.props;
        if (!event) return null;

        return (
            <div className='ticket-show'>
                your name is: {user.fname}
                <br/>
                the event you're going to is {event.title}
                <br/>
                This is your ticket lol.
            </div>
        )
    }
};