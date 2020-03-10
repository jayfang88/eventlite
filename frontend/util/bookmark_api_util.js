export const fetchBookmarks = () => (
    $.ajax({
        method: 'GET',
        url: '/api/bookmarks'
    })
);

export const createBookmark = bookmark => (
    $.ajax({
        method: 'POST',
        url: '/api/bookmarks'
    })
);

export const deleteBookmark = bookmarkId => (
    $.ajax({
        method: 'DELETE',
        url: `/api/bookmarks/${bookmarkId}`
    })
);