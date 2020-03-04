# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all

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

e1 = Event.create!(
    title: "Haight-Ashbury Community Potluck",
    location: "1685 Haight St, San Francisco, CA 94117",
    starts: "2020-04-04 12:30:00",
    ends: "2020-04-05 12:30:00",
    description: "Come have a good time",
    organizer_id: u1.id,
    category: "Food & Drink",
    ticket_type: "Free"
)

e2 = Event.create!(
    title: "Nathan's Birthday Bananza",
    location: "825 Battery St, San Francisco, CA 94111",
    starts: "2020-03-12 20:30:00",
    ends: "2020-03-12 23:59:00",
    description: "Come celebrate Nathan's bday",
    organizer_id: u2.id,
    category: "Social",
    ticket_type: "Paid"
)

e3 = Event.create!(
    title: "Yoga at Golden Gate Park",
    location: "320 Bowling Green Dr, San Francisco, CA 94118",
    starts: "2020-04-19 11:00:00",
    ends: "2020-04-19 12:30:00",
    description: "Join us in some refreshing yoga in beautiful GGP",
    organizer_id: u1.id,
    category: "Health & Fitness",
    ticket_type: "Paid"
)