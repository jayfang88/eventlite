json.tickets do
    @tickets.each do |ticket|
        json.set! ticket.id do
            json.extract! ticket, :id, :user_id, :event_id, :event
        end
    end
end

json.events do 
    current_user.attending_events.each do |event|
        json.set! event.id do
            json.partial! 'api/events/event', event: event
        end
    end
end