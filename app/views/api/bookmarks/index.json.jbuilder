@bookmarks.each do |bookmark|
    json.set! bookmark.id do
        json.extract! bookmark, :id, :user_id, :event_id, :event
    end
end

# json.events do
#     current_user.bookmarked_events.each do |event|
#         json.set! event.id do
#             json.partial! 'api/events/event', event: event
#         end
#     end
# end