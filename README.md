# Eventlite



Eventlite, an Eventbrite clone, is an event discovery and planning application. The app allows users to find, create, and register for events that can be viewed and bookmarked by other users. It was created with Ruby on Rails backend, PostgreSQL database, and React/Redux frontend.

[Eventlite](https://eventlite-fsp.herokuapp.com)


## Key Features
- User authentication
- Create/Read/Update/Delete events
- Event Registrations and Bookmarks
- Uploading images via AWS

## Landing Page

The landing page features the Event Index with tabs to selectively display events by their respective category/ticket type.
<img src='https://eventlite-fsp-dev.s3-us-west-1.amazonaws.com/readme-landing.png' />

## Events

Users can create new events with this form, with the option to upload an event photo. If no image is uploaded, a default is set.

<img src='https://eventlite-fsp-dev.s3-us-west-1.amazonaws.com/reedme-eventform.png' />


Each Event Show page contains functions to Register for, or Bookmark an event.

<img src='https://eventlite-fsp-dev.s3-us-west-1.amazonaws.com/readme-eventshow.png' />


Registered and bookmarked events appear in the user's profile page.

<img src='https://eventlite-fsp-dev.s3-us-west-1.amazonaws.com/readme-usershow.png' />


### Future Implementations
- search bar/function to look up events by title
- implement Google Maps api for each Event Show
