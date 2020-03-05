# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all
Event.delete_all

u1 = User.create!(
    email: 'jfang@test.com',
    fname: 'Jestan',
    lname: 'Fang',
    password: 'password'
)
u2 = User.create!(
    email: 'vyan@test.com',
    fname: 'Vargenio',
    lname: 'Yan',
    password: 'password'
)
u3 = User.create!(
    email: 'carlos@test.com',
    fname: 'Carlos',
    lname: 'Garcia',
    password: 'password'
)
u4 = User.create!(
    email: 'dphan@test.com',
    fname: 'Danny',
    lname: 'Phan',
    password: 'password'
)

e1 = Event.create!(
    title: "Haight-Ashbury Community Potluck",
    location: "1685 Haight St, San Francisco, CA",
    starts: "2020-04-04 12:30:00 GMT-0700",
    ends: "2020-04-05 12:30:00 GMT-0700",
    description: "Join us in celebratign the diverse culture of San Francisco's
    own Haight-Ashbury district.",
    organizer_id: u1.id,
    category: "Food & Drink",
    ticket_type: "Free"
)
e2 = Event.create!(
    title: "Nathan's Birthday Bananza",
    location: "825 Battery St, San Francisco, CA",
    starts: "2020-03-12 20:30:00 GMT-0700",
    ends: "2020-03-12 23:59:00 GMT-0700",
    description: "Come celebrate Nathan's 18th bday! BYOB.",
    organizer_id: u2.id,
    category: "Community & Culture",
    ticket_type: "Paid"
)
e3 = Event.create!(
    title: "Yoga at Golden Gate Park",
    location: "320 Bowling Green Dr, San Francisco, CA",
    starts: "2020-04-19 11:00:00 GMT-0700",
    ends: "2020-04-19 12:30:00 GMT-0700",
    description: "Join us in some refreshing yoga in beautiful GGP. Dogs allowed.",
    organizer_id: u1.id,
    category: "Sports & Fitness",
    ticket_type: "Paid"
)
e4 = Event.create!(
    title: "Underwater Basket Weaving",
    location: "Stow Lake, San Francisco, CA",
    starts: "2020-04-16 14:00:00 GMT-0700",
    ends: "2020-04-16 16:00:00 GMT-0700",
    description: "Ever wanted to learn how to weave baskets under 
    immense pressure? Now you can with underwater basket weaving! Scuba gear will 
    not be provided.",
    organizer_id: u2.id,
    category: "Hobbies & Special Interest",
    ticket_type: "Paid"
)
e5 = Event.create!(
    title: "Basketball Masterclass w/ Carlos Garcia",
    location: "Tha Streets",
    starts: "2020-03-31 13:30:00 GMT-0700",
    ends: "2020-03-31 15:30:00 GMT-0700",
    description: "Do you HOOP? No, you don't. Learn how to be a true baller with 
    this once in a lifetime opportunity to play with NBA Legend Carlos Garcia.",
    organizer_id: u3.id,
    category: "Sports & Fitness",
    ticket_type: "Paid"
)
e6 = Event.create!(
    title: "Brownie Baking 101",
    location: "Ryan's Apartment",
    starts: "2020-04-20 16:20:00 GMT-0700",
    ends: "2020-04-20 16:21:00 GMT-0700",
    description: "Ryan Leung is hosting weekly brownie baking in your neighborhood this spring! 
    Lift your spirits with complimentary treats. Bring friends and family to what is guaranteed to be the high point of your week.",
    organizer_id: u1.id,
    category: "Food & Drink",
    ticket_type: "Free"
)
e7 = Event.create!(
    title: "DJ Danny Phan at Bill Graham",
    location: "Bill Graham Civic Auditorium, San Francisco, CA",
    starts: "2020-03-27 22:00:00 GMT-0700",
    ends: "2020-03-27 23:59:59 GMT-0700",
    description: "Experience sounds you have never heard before. Feel feels you 
    have never felt before.",
    organizer_id: u4.id,
    category: "Music",
    ticket_type: "Paid"
)
e8 = Event.create!(
    title: "Nap Time @ Lunch",
    location: "App Academy SF, San Francisco, CA",
    starts: "2020-04-01 12:20:00 GMT-0700",
    ends: "2020-04-01 13:30:00 GMT-0700",
    description: "We all put in a lot of work into our projects. Let's reward 
    ourselves with a nap. Must be a currently enrolled student of a/A to participate.",
    organizer_id: u1.id,
    category: "Health & Wellness",
    ticket_type: "Free"
)
