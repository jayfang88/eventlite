import React from 'react';
import EventIndexItem from './event_index_item';
import { Route, NavLink, Switch } from 'react-router-dom';
import EventIndexFilterContainer from './event_index/event_index_filter_container';

class EventIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.requestEvents();
    }

    render() {
        if (!this.props.events) return null;
        
        const events = this.props.events.map((event, i) => (
            <EventIndexItem key={i} event={event}/>
        ))

        const activeStyle = {
            color: "blue",
            borderBottom: "2px solid blue"
        };

        return (
            <div id='event-index-container'>
                <div id='event-index-search'>
                    <h1 id='event-index-search-text'>Popular in</h1>
                    <input type="text" id='event-index-search-input' placeholder='San Francisco'/>
                </div>

                <div className='event-indexes-wrapper'>
                    <div className='event-indexes' id='events-all'>
                        <NavLink className='event-index-navlink' to='/events/all' activeStyle={activeStyle}>
                            All
                        </NavLink> 
                    </div>
                    <div className='event-indexes' id='events-free'>
                        <NavLink className='event-index-navlink' to='/events/free' activeStyle={activeStyle}>
                            Free
                        </NavLink>
                    </div>
                    <div className='event-indexes' id='events-music'>
                        <NavLink className='event-index-navlink' to='/events/music' activeStyle={activeStyle}>
                            Music
                        </NavLink> 
                    </div>
                    <div className='event-indexes' id='events-fooddrink'>
                        <NavLink className='event-index-navlink' to='/events/food-drink' activeStyle={activeStyle}>
                            Food &amp; Drink
                        </NavLink>
                    </div>
                    <div className='event-indexes' id='events-sports'>
                        <NavLink className='event-index-navlink' to='/events/sports-fitness' activeStyle={activeStyle}>
                            Sports &amp; Fitness
                        </NavLink>
                    </div>
                </div>

                <Route exact path='/events/all' component={EventIndexFilterContainer} />
                <Route exact path='/events/free' component={EventIndexFilterContainer} />
                <Route exact path='/events/music' component={EventIndexFilterContainer} />
                <Route exact path='/events/food-drink' component={EventIndexFilterContainer} />
                <Route exact path='/events/sports-fitness' component={EventIndexFilterContainer} />
                {/* { events } */}
            </div>
        )
    }
};

export default EventIndex;