import React from 'react';
import EventIndexItem from './event_index_item';
import { Route, NavLink, Switch } from 'react-router-dom';
import $ from 'jquery';

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
        $('#all-filter').addClass('event-filter-active');
    }

    updateCity() {
        this.setState({cityInput: event.target.value});
    }

    // keyPressed() {
    //     if (event.key === 'Enter') {
    //         this.setState({ cityInput: event.target.value })
    //     }
    // }

    filterByCity(events, city) {
        city = city || 'San Francisco'
        return events.filter(e => {
            let location = e.location.toLowerCase().split(' ').join('')
            return location.includes(city.toLowerCase().split(' ').join(''));
        });
    }

    filterEvents(filter) {
        $('.event-filters-list li').removeClass('event-filter-active');
        $(`#${filter}-filter`).addClass('event-filter-active');

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
            case 'food-drink':
                filteredEvents = events.filter(e => e.category === 'Food & Drink')
                break;
            case 'sports-fitness':
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

        return (
            <div id='event-index-container'>
                <div id='event-index-search'>
                    <h1 id='event-index-search-text'>Popular in</h1>
                    <input type="text" id='event-index-search-input' 
                           value={this.city} placeholder='San Francisco'
                           onChange={() => this.updateCity()} />
                </div>

                <ul className='event-filters-list'>
                    <li className='event-filter' id='all-filter'
                        onClick={() => this.filterEvents('all')}>All</li>
                    <li className='event-filter' id='free-filter'
                        onClick={() => this.filterEvents('free')}>Free</li>
                    <li className='event-filter' id='music-filter'
                        onClick={() => this.filterEvents('music')}>Music</li>
                    <li className='event-filter' id='food-drink-filter'
                        onClick={() => this.filterEvents('food-drink')}>Food &amp; Drink</li>
                    <li className='event-filter' id='sports-fitness-filter'
                        onClick={() => this.filterEvents('sports-fitness')}>Sports &amp; Fitness</li>
                </ul>

                {filteredEvents.length > 0 ? '' : (<p className='no-events-match'>No events match this criteria.</p>)}
                <div className='event-index'>
                    { filteredEvents }
                </div>
                {/* <div className='event-index'>
                    {filteredEvents.length > 0 ? (
                        filteredEvents 
                     ) : (
                        <p className='no-events-match'>No events match this criteria.</p>
                    )}
                </div> */}
            </div>
        )
    }
};

export default EventIndex;