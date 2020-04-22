import React from 'react';
import { Link } from 'react-router-dom';
import { convertDate } from '../../util/time_util';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft }from '@fortawesome/free-solid-svg-icons';

export default class TicketShow extends React.Component {
    componentDidMount() {
        window.scrollTo(0,0);
        this.props.fetchTickets();
    }
    
    render() {
        const { ticketId, user, event } = this.props;
        if (!event) return null;

        return (
            <div className='ticket-show'>
                <Link to={`/u/${user.id}`} className='ticket-show-back'>
                    <FontAwesomeIcon icon={faArrowLeft} 
                    className='ticket-show-backarrow'/> Back to Tickets
                </Link>
                <header className='ticket-show-header'>
                    <h1>Order for <Link to={`/e/${event.id}`} 
                        className='ticket-show-link'>{event.title}</Link></h1>
                    <p>Order #{ticketId}</p>
                    <p>{convertDate(event.startdate)} at {event.starttime} -</p>
                    <p>{convertDate(event.enddate)} at {event.endtime} (PDT)</p>
                    <p>{event.location}</p>
                </header>
                <main className='ticket-show-main'>
                    <section className='ticket-show-column'>
                        <a href={`mailto:${user.email}`}>Contact The Organizer</a>
                        <h6>Refund Policy:</h6>
                        <p>No Refunds</p>
                    </section>
                    <section className='ticket-show-info'>
                        <h3>Ticket</h3>
                        <div className='ticket-show-details'>
                            <h5>Contact Information</h5>
                            <p className='ticket-show-details-title'>First Name <span className='red-asterisk'>*</span></p>
                            <p className='ticket-show-details-info'>{user.fname}</p>
                            <p className='ticket-show-details-title'>Last Name <span className='red-asterisk'>*</span></p>
                            <p className='ticket-show-details-info'>{user.lname}</p>
                            <p className='ticket-show-details-title'>Email <span className='red-asterisk'>*</span></p>
                            <p className='ticket-show-details-info'>{user.email}</p>
                            <p className='ticket-show-details-title'>Delivery Method</p>
                            <p className='ticket-show-details-info'>eTicket</p>
                        </div>
                    </section>
                </main>
            </div>
        )
    }
};