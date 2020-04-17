import { connect } from 'react-redux';
import { createBookmark, deleteBookmark } from '../../actions/bookmark_actions';
import EventIndexItem from './event_index_item'

const mSTP = (state, ownProps) => {
    const event = ownProps.event
    return{
        event,
        currentUserId: state.session.id,
        bookmarked: event.current_user_bookmarked
}};

const mDTP = dispatch => ({
    createBookmark: (bookmark, eventId) => dispatch(createBookmark(bookmark, eventId)),
    deleteBookmark: (bookmarkId, eventId) => dispatch(deleteBookmark(bookmarkId, eventId))
});

export default connect(mSTP, mDTP)(EventIndexItem)