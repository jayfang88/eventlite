import { connect } from 'react-redux';
import { fetchTickets, deleteTicket } from '../../actions/ticket_actions';
import { fetchBookmarks } from '../../actions/bookmark_actions';
import UserShow from './user_show';

const mSTP = state => ({
    user: state.entities.users[state.session.id],
    tickets: state.entities.tickets,
    bookmarks: state.entities.bookmarks
});

const mDTP = dispatch => ({
    fetchTickets: () => dispatch(fetchTickets()),
    deleteTicket: ticketId => dispatch(deleteTicket(ticketId)),
    fetchBookmarks: () => dispatch(fetchBookmarks())
});

export default connect(mSTP, mDTP)(UserShow);