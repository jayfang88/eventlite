import React from 'react';
import EventIndexItem from './event_index_item';
import { Route, NavLink, Switch } from 'react-router-dom';
import EventIndexFilterContainer from './event_index/event_index_filter_container';

class EventIndex extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            cityInput: 'San Francisco',
            filter: 'all'
        }
    }

    componentDidMount() {
        this.props.requestEvents();
    }

    updateCity() {
        this.setState({cityInput: event.target.value});
    }

    keyPressed() {
        if (event.key === 'Enter') {
            console.log(this.state.cityInput);
            this.setState({ cityInput: event.target.value })
        }
    }

    filterByCity(events, city) {
        return events.filter(e => {
            let location = e.location.toLowerCase().split(' ').join('')
            return location.includes(city.toLowerCase().split(' ').join(''));
        });
    }

    filterEvents(filter) {
        this.setState({filter: filter});
    }
    
    render() {
        if (!this.props.events) return null;
        const { events } = this.props;

        let filteredEvents;
        switch(this.state.filter) {
            case 'free':
                filteredEvents = events.filter(e => e.ticket_type ==='Free');
                break;
            case 'music':
                filteredEvents = events.filter(e => e.category === 'Music')
                break;
            case 'food+drink':
                filteredEvents = events.filter(e => e.category === 'Food & Drink')
                break;
            case 'sports+fitness':
                filteredEvents = events.filter(e => e.category === 'Sports & Fitness')
                break;
            default:
                filteredEvents = events
                break;
        }

        filteredEvents = this.filterByCity(filteredEvents, this.state.cityInput);

        filteredEvents = filteredEvents.map((event, i) => (
            <EventIndexItem key={i} event={event} />
        ));

        const activeStyle = {
            color: "blue",
            borderBottom: "2px solid blue"
        };

        return (
            <div id='event-index-container'>
                <div id='event-index-search'>
                    <h1 id='event-index-search-text'>Popular in</h1>
                    <input type="text" id='event-index-search-input' 
                           value={this.city} placeholder='San Francisco'
                           onKeyDown={() => this.keyPressed()}/>
                </div>

                <div className='event-filters-container'>
                    <p className='event-filter'
                        onClick={() => this.filterEvents('all')}>All</p>
                    <p className='event-filter'
                        onClick={() => this.filterEvents('free')}>Free</p>
                    <p className='event-filter'
                        onClick={() => this.filterEvents('music')}>Music</p>
                    <p className='event-filter'
                        onClick={() => this.filterEvents('food+drink')}>Food &amp; Drink</p>
                    <p className='event-filter'
                        onClick={() => this.filterEvents('sports+fitness')}>Sports &amp; Fitness</p>
                </div>

                <div className='event-index'>
                    {filteredEvents.length > 0 ? (
                        filteredEvents 
                     ) : (
                        <p className='no-events-match'>No events match this criteria :(</p>
                    )}
                </div>
            </div>
        )
    }
};

export default EventIndex;