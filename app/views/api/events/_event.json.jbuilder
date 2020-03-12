json.extract! event, :id, :title, :location, :startdate, :starttime, :enddate, :endtime, :description, :category, :ticket_type, :organizer_id
json.organizerFname event.organizer.fname
json.organizerLname event.organizer.lname

if (event.photo.attached?)
    json.photoUrl url_for(event.photo)
else
    json.photoUrl 'https://eventlite-fsp-dev.s3-us-west-1.amazonaws.com/default-pic.jpg'
end