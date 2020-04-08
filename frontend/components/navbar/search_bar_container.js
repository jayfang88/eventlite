import { connect } from 'react-redux';
import { requestEvents } from '../../actions/event_actions';

import SearchBar from './search_bar';

const mSTP = state => ({
    events: Object.values(state.entities.events)
});

const mDTP = dispatch => ({
    requestEvents: () => dispatch(requestEvents())
});

export default connect(mSTP, mDTP)(SearchBar)