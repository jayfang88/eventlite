import React from 'react';
import { convertDate } from '../../util/time_util';

class TicketPurchase extends React.Component {
    constructor(props) {
        super(props)
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

        return(
            <div id='ticket-purchase'>
                <div id='ticket-purchase-left'>
                    <div id='ticket-purchase-head'>
                        <div id='ticket-purchase-title'>{event.title}</div>
                        <div id='ticket-purchase-time'>
                            {convertDate(event.startdate, event.starttime)}, {
                            event.starttime} - 
                            {convertDate(event.enddate, event.endtime)}, 
                            {event.endtime} PT
                        </div>
                    </div>
                    <div id='ticket-purchase-body'>
                        {event.description.length > 500 ? event.description.slice(0, 500)+'...' : event.description}
                    </div>
                    <div id='ticket-purchase-footer'>
                        {!attending ? (
                            <div className='ticket-modal-button'>
                                <button id='checkout'
                                onClick={() => this.handleRegistration()}>
                                    Check Out
                                </button>
                            </div>
                        ) : (
                            <div className='ticket-modal-button'>
                                <button id='sell-ticket'
                                onClick={() => this.handleRegistration()}>
                                    Cancel Order
                                </button>
                            </div>
                        )}
                    </div>
                </div>
                <div id='ticket-purchase-right'>
                    <div id='ticket-purchase-img-container'>
                        <img id='ticket-purchase-img'
                        src={event.photoUrl} alt="event-photo"/>
                    </div>
                </div>
            </div>
        )
    }
};

export default TicketPurchase;