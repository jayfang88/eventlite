json.extract! event, :id, :title, :location, :startdate, :starttime, :enddate, :endtime, :description, :category, :ticket_type, :organizer_id, :organizer
if (event.photo.attached?)
    json.photoUrl url_for(event.photo)
end