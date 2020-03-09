json.tickets do |ticket|
    json.set! ticket.id do
        ticket.extract! ticket, :user_id, :event_id
    end
end