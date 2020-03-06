json.event do
    json.partial! 'api/events/event', event: @event
    json.photoUrl url_for(@event.photo)
end