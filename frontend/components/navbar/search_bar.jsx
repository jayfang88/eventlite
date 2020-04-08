import React from 'react';
import { Link } from 'react-router-dom';
import { convertDate } from '../../util/time_util';

export default class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = { events: [] };
        this.searchQuery = '';
        this.handleInput = this.handleInput.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.parseEvents = this.parseEvents.bind(this);
    }
    
    componentDidMount() {
        this.props.requestEvents();
    }

    handleInput() {
        this.searchQuery = event.target.value;
        this.parseEvents();
    }

    handleClick() {
        this.searchQuery = '';
        this.setState({ events: [] });
    }

    parseEvents() {
        let parsedEvents = this.props.events.filter(event => {
            let title = event.title.toLowerCase().split(' ').join('');
            let search = this.searchQuery.toLowerCase().split(' ').join('');
            return title.includes(search);
        })
        this.setState({ events: parsedEvents });
    }

    render() {
        let searchEvents = this.state.events.map((event, i) => 
            <Link to={`/e/${event.id}`} onClick={this.handleClick} key={i}>
                <li className='search-event'>
                    <img src={event.photoUrl} className='search-img' />
                    <div>
                        <p>{event.title}</p>
                        <p>{convertDate(event.startdate)} {event.starttime}</p>
                    </div>
                </li>
            </Link>
        );

        return(
            <div id='nav-search'>
                <input id='searchbar' type="text" placeholder='Search for events'
                value={this.searchQuery} onChange={this.handleInput} />
                {this.searchQuery.length > 0 ? (
                    <div className='search-results-container'>
                        <div className='search-results-title'>Events</div>
                        <div>{searchEvents.slice(0,5)}</div>
                    </div>
                ) : (
                    null
                )}
            </div>
        )
    }
};