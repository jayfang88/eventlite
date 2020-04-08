import { connect } from 'react-redux';
import { requestEvents } from '../../actions/event_actions';

import SearchBar from './search_bar';

const mSTP = state => ({
    searchQuery: ''
});

const mDTP = dispatch => ({
    requestEvents: () => dispatch(requestEvents())
});

export default connect(mSTP, mDTP)(SearchBar)