import * as BookmarkApiUtil from '../util/bookmark_api_util';

export const RECEIVE_BOOKMARKS = 'RECEIVE_BOOKMARKS';
export const RECEIVE_BOOKMARK = 'RECEIVE_BOOKMARK';
export const REMOVE_BOOKMARK = 'REMOVE_BOOKMARK';

const receiveBookmarks = bookmarks => ({
    type: RECEIVE_BOOKMARKS,
    bookmarks
});

const receiveBookmark = (bookmark, eventId) => ({
    type: RECEIVE_BOOKMARK,
    bookmark,
    eventId
});

const removeBookmark = (bookmarkId, eventId) => ({
    type: REMOVE_BOOKMARK,
    bookmarkId,
    eventId
});

export const fetchBookmarks = () => dispatch => (
    BookmarkApiUtil.fetchBookmarks()
        .then(bookmarks => dispatch(receiveBookmarks(bookmarks)))
);

export const createBookmark = (bookmark, eventId) => dispatch => {
    return (
        BookmarkApiUtil.createBookmark(bookmark)
            .then(bookmark => dispatch(receiveBookmark(bookmark, eventId)))
    )
};

export const deleteBookmark = (bookmarkId, eventId) => dispatch => (
    BookmarkApiUtil.deleteBookmark(bookmarkId)
        .then(() => dispatch(removeBookmark(bookmarkId, eventId)))
);