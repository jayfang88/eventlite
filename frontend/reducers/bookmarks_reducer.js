import { RECEIVE_BOOKMARKS, RECEIVE_BOOKMARK, REMOVE_BOOKMARK } from '../actions/bookmark_actions';

const bookmarksReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    
    switch (action.type) {
        case RECEIVE_BOOKMARKS:
            return action.bookmarks
        case RECEIVE_BOOKMARK:
            newState[action.bookmark.id] = action.bookmark
            return newState
        case REMOVE_BOOKMARK:
            delete newState[action.bookmarkId]
            return newState
        default:
            return state
    }
};

export default bookmarksReducer;