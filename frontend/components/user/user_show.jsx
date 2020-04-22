import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import TicketIndexItemContainer from '../tickets/ticket_index_item_container';
import BookmarkIndexItem from '../bookmarks/bookmark_index_item';


class UserShow extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        window.scrollTo(0,0);
        this.props.fetchTickets();
        this.props.fetchBookmarks();
    }

    render() {
        const { user, tickets, deleteTicket, bookmarks } = this.props

        let tix
        if (tickets.events) {
            tix = Object.values(tickets.tickets).map((ticket, i) => (
                <TicketIndexItemContainer key={i} ticketId={ticket.id} eventId={ticket.event_id} userId={ticket.user_id} />
                // BUTTON TO DELETE TICKET?
            ))
        } else {
            tix = <div className='user-show-nothing'>No Upcoming Events</div>
        }

        let bookmx
        if (bookmarks.events) {
            bookmx = Object.values(bookmarks.events).map((event, i) => (
                <BookmarkIndexItem key={i} event={event} />
            ))
        } else {
            bookmx = <div className='user-show-nothing'>No Bookmarks</div>
        }

        return(
            <div id='user-show-page'>
                <div id='user-show'>
                    <div id='user-show-head'>
                        <FontAwesomeIcon icon={faUser} id='user-show-icon'/>
                        <div id='user-show-name'>{user.fname} <span id='user-show-lname'>{user.lname}</span></div>
                    </div>
                    <div id='user-show-body'>
                        <div id='user-show-aside'>

                        </div>
                        <div id='user-show-main'>
                            <h2 className='user-show-label'>Tickets</h2>
                            <div id='tickets-index'>
                                { tix }
                            </div>
                            <div id='border-bottom'></div>
                            <h2 className='user-show-label'>Bookmarks</h2>
                            <div id='bookmarks-index'>
                                { bookmx }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

export default UserShow;