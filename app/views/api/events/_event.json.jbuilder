if current_user
    tickets = current_user.tickets.select{ |ticket| ticket.event_id == event.id }
    ticket = current_user.tickets.select{ |ticket| ticket.event_id == event.id && ticket.user_id == current_user.id}.first
    bookmarks = current_user.bookmarks.select{ |bookmark| bookmark.event_id == event.id}
    bookmark = current_user.bookmarks.select{ |bookmark| bookmark.event_id == event.id && bookmark.user_id == current_user.id}.first
else
    tickets = []
    bookmarks = []
end

json.extract! event, :id, :title, :location, :startdate, :starttime, :enddate, :endtime, :description, :category, :ticket_type, :organizer_id
json.organizerFname event.organizer.fname
json.organizerLname event.organizer.lname

if (event.photo.attached?)
    json.photoUrl url_for(event.photo)
else
    json.photoUrl 'https://eventlite-fsp-dev.s3-us-west-1.amazonaws.com/default1.jpg'
end

json.current_user_attending (tickets.length > 0)
json.current_user_bookmarked (bookmarks.length > 0)
json.ticketId ticket.id if ticket
json.bookmarkId bookmark.id if bookmark