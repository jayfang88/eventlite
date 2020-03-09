json.partial! 'api/events/event', event: @event

if (@event.photo.attached?)
    json.photoUrl url_for(@event.photo)
end
