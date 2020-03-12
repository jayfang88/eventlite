import React from 'react';

class TicketPurchase extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        // debugger;
        // this.props.requestEvent(this.props.match.params.eventId)
    }

    convertDate(eventDate, eventTime) {
        const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

        let fullDate = new Date(eventDate);
        let day = days[fullDate.getDay()];
        let month = months[fullDate.getMonth()];
        let date = fullDate.getDate() + 1;
        let yr = fullDate.getFullYear();

        let combined = `${day}, ${month} ${date}, ${yr} ${eventTime}`;
        return combined;
    }

    handleRegistration() {
        if (this.props.currentUserId) {
            if (!this.props.event.current_user_attending) {
                this.props.createTicket({
                    user_id: this.props.currentUserId,
                    event_id: this.props.event.id,
                }, this.props.event.id)
            } else {
                this.props.deleteTicket(this.props.event.ticketId, this.props.event.id)
            }
        }
    }

    render() {
        const { event, attending } = this.props
        // if (!event) return null;

        return(
            <div id='ticket-purchase'>
                <div id='ticket-purchase-left'>
                    <div id='ticket-purchase-head'>
                        <div id='ticket-purchase-title'>{event.title}</div>
                        <div id='ticket-purchase-time'>{this.convertDate(event.startdate, event.starttime)} - {this.convertDate(event.enddate, event.endtime)} PT</div>
                    </div>
                    <div id='ticket-purchase-body'>
                        
                    </div>
                    <div id='ticket-purchase-footer'>
                        {!attending ? (
                            <div className='ticket-modal-button'><button id='checkout' onClick={() => this.handleRegistration()}>Check Out</button></div>
                        ) : (
                            <div className='ticket-modal-button'><button id='sell-ticket' onClick={() => this.handleRegistration()}>Cancel Order</button></div>
                        )}
                    </div>
                </div>
                <div id='ticket-purchase-right'>
                    <div id='ticket-purchase-img-container'>
                        <img id='ticket-purchase-img' src={event.photoUrl} alt="event-photo"/>
                    </div>
                </div>
            </div>
        )
    }
};

export default TicketPurchase;