json.extract! event, :id, :title, :location, :startdate, :starttime, :enddate, :endtime, :description, :organizer_id, :category, :ticket_type, :organizer
if (event.photo.attached?)
    json.photoUrl url_for(event.photo)
end