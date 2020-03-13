import { connect } from 'react-redux';
import { requestEvents } from '../../../actions/event_actions';
import EventIndexFiltered from './event_index_filtered';

const mSTP = (state, ownProps) => {
    let path = ownProps.match.path.split('/');
    let pathId = path[path.length -1];
    return{
        indexPath: pathId,
        events: Object.values(state.entities.events),
    }
};

const mDTP = dispatch => ({
    requestEvents: () => dispatch(requestEvents())
})

export default connect(mSTP, mDTP)(EventIndexFiltered);