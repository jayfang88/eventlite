import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import TicketIndexItem from '../tickets/ticket_index_item';


class UserShow extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchTickets()
    }

    render() {
        const { user, tickets, deleteTicket } = this.props
        if (Object.values(tickets).length === 0) return null;

        let events = Object.values(tickets.events).map((event, i) => (
            <TicketIndexItem key={i} event={event} />
            // <button>I don't wanna go anymore</button>
        ))

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
                                { events }
                            </div>
                            <div id='border-bottom'></div>
                            <h2 className='user-show-label'>Bookmarks</h2>
                            <div id='bookmarks-index'>
                                {/* { bookmarks } */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

export default UserShow;