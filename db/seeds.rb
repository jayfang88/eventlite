# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'

Event.delete_all
User.delete_all

u1 = User.create!(
    email: 'jfang@test.com',
    fname: 'Justin',
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
u5 = User.create!(
    email: 'nmendes@test.com',
    fname: 'Nathan',
    lname: 'Mendes',
    password: 'password'
)

e1 = Event.create!(
    title: "Haight-Ashbury Community Potluck",
    location: "1685 Haight St, San Francisco, CA",
    startdate: "2020-04-04",
    starttime: "12:30 PM",
    enddate: "2020-04-04",
    endtime: "6:30 PM",
    description: "Join us in celebrating the diverse culture of San Francisco's
    own Haight-Ashbury district.",
    organizer_id: u1.id,
    category: "Food & Drink",
    ticket_type: "Free"
)
e2 = Event.create!(
    title: "Nathan's Birthday Bananza",
    location: "825 Battery St, San Francisco, CA",
    startdate: "2020-03-12",
    starttime: "8:30 PM",
    enddate: "2020-03-13",
    endtime: "3:00 AM",
    description: "Come celebrate Nathan's 18th bday! BYOB.",
    organizer_id: u5.id,
    category: "Community & Culture",
    ticket_type: "Paid"
)
e3 = Event.create!(
    title: "Yoga at Golden Gate Park",
    location: "320 Bowling Green Dr, San Francisco, CA",
    startdate: "2020-04-19",
    starttime: "11:00 AM",
    enddate: "2020-04-19",
    endtime: "12:30 PM",
    description: "Join us in some refreshing yoga in beautiful GGP. Dogs allowed.",
    organizer_id: u1.id,
    category: "Sports & Fitness",
    ticket_type: "Paid"
)
e4 = Event.create!(
    title: "Underwater Basket Weaving",
    location: "Stow Lake, San Francisco, CA",
    startdate: "2020-04-16",
    starttime: "2:00 PM",
    enddate: "2020-04-16",
    endtime: "4:00 PM",
    description: "Ever wanted to learn how to weave baskets under 
    immense pressure? Now you can with underwater basket weaving! Scuba gear will 
    not be provided.",
    organizer_id: u1.id,
    category: "Hobbies & Special Interest",
    ticket_type: "Paid"
)
e5 = Event.create!(
    title: "Basketball Masterclass w/ Carlos Garcia",
    location: "Tha Streets",
    startdate: "2020-03-31",
    starttime: "1:30 PM",
    enddate: "2020-03-31",
    endtime: "3:30 PM",
    description: "Do you HOOP? No, you don't. Learn how to be a true baller with 
    this once in a lifetime opportunity to play with App Academy Legend Carlos Garcia.",
    organizer_id: u3.id,
    category: "Sports & Fitness",
    ticket_type: "Paid"
)
e6 = Event.create!(
    title: "Brownie Baking 101",
    location: "Ryan's Apartment",
    startdate: "2020-04-20",
    starttime: "4:20 PM",
    enddate: "2020-04-20",
    endtime: "4:21 PM",
    description: "Ryan Leung is hosting weekly brownie baking in your neighborhood this spring! 
    Lift your spirits with complimentary treats. Bring friends and family to what is guaranteed to be the high point of your week.",
    organizer_id: u1.id,
    category: "Food & Drink",
    ticket_type: "Free"
)
e7 = Event.create!(
    title: "DJ Danny Phan at Bill Graham",
    location: "Bill Graham Civic Auditorium, San Francisco, CA",
    startdate: "2020-03-27",
    starttime: "10:00 PM",
    enddate: "2020-03-27",
    endtime: "1:00 AM",
    description: "Experience sounds you have never heard before. Feel feels you 
    have never felt before.",
    organizer_id: u4.id,
    category: "Music",
    ticket_type: "Paid"
)
e8 = Event.create!(
    title: "Nap Time @ Lunch",
    location: "App Academy SF, San Francisco, CA",
    startdate: "2020-04-01",
    starttime: "12:20 PM",
    enddate: "2020-04-01",
    endtime: "1:30 PM",
    description: "We all put in a lot of work into our projects. Let's reward 
    ourselves with a nap. Must be a currently enrolled student of a/A to participate.",
    organizer_id: u1.id,
    category: "Health & Wellness",
    ticket_type: "Free"
)

# file = open('https://eventlite-fsp-dev.s3-us-west-1.amazonaws.com/dunk1.jpg')
# e1.photo.attach(io: File.open('/Users/jf/Documents/eventlite/dunk1.jpg'), filename: 'dunk')

e1.photo.attach(io: open('https://eventlite-fsp-dev.s3-us-west-1.amazonaws.com/haight-ashbury.jpg'), filename: 'haightasbhury')
e2.photo.attach(io: open('https://eventlite-fsp-dev.s3-us-west-1.amazonaws.com/birthday.jpg'), filename: 'birthday')
e3.photo.attach(io: open('https://eventlite-fsp-dev.s3-us-west-1.amazonaws.com/yoga.jpg'), filename: 'yoga')
e4.photo.attach(io: open('https://eventlite-fsp-dev.s3-us-west-1.amazonaws.com/underwater.jpg'), filename: 'underwater')
e5.photo.attach(io: open('https://eventlite-fsp-dev.s3-us-west-1.amazonaws.com/dunk1.jpg'), filename: 'dunk')
e6.photo.attach(io: open('https://eventlite-fsp-dev.s3-us-west-1.amazonaws.com/brownies.jpg'), filename: 'chefryan')
e7.photo.attach(io: open('https://eventlite-fsp-dev.s3-us-west-1.amazonaws.com/djdanny.jpg'), filename: 'djdanny')
e8.photo.attach(io: open('https://eventlite-fsp-dev.s3-us-west-1.amazonaws.com/nap.jpg'), filename: 'nappods')
