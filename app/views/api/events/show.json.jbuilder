if current_user
    tickets = current_user.tickets.select{ |ticket| ticket.event_id == @event.id }
else
    tickets = []
end

json.partial! 'api/events/event', event: @event
json.current_user_attending? (tickets.length > 0)