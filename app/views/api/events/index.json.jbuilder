@events.each do |event|
    json.set! event.id do
        json.partial! 'event', event: event
        json.photoUrl url_for(event.photo)
    end
end