import { connect } from 'react-redux';
import { fetchTickets } from '../../actions/ticket_actions';
import UserShow from './user_show';

const mSTP = state => ({
    user: state.entities.users[state.session.id],
    tickets: state.entities.tickets
});

const mDTP = dispatch => ({
    fetchTickets: () => dispatch(fetchTickets())
});

export default connect(mSTP, mDTP)(UserShow);