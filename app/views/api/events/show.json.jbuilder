if current_user
    tickets = current_user.tickets.select{ |ticket| ticket.event_id == @event.id }
    bookmarks = current_user.bookmarks.select{ |bookmark| bookmark.event_id == @event.id}
    bookmark = current_user.bookmarks.select{ |bookmark| bookmark.event_id == @event.id && bookmark.user_id == current_user.id}.first
else
    tickets = []
    bookmarks = []
end


json.partial! 'api/events/event', event: @event
json.current_user_attending (tickets.length > 0)
json.current_user_bookmarked (bookmarks.length > 0)
json.bookmarkId bookmark.id if bookmark