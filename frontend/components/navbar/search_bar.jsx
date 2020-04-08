import React from 'react';
import { Link } from 'react-router-dom';

export default class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = { events: [] };
        this.searchQuery = this.props.searchQuery;
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
        console.log('taking u to the event');
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
            <li key={i} className='search-event'>
                <Link to={`/e/${event.id}`}
                    onClick={this.handleClick}>
                    {event.title}
                </Link>
            </li>
        );

        return(
            <div id='nav-search'>
                <input id='searchbar'
                type="text" 
                placeholder='Search for events'
                value={this.searchQuery}
                onChange={this.handleInput} />
                {this.searchQuery.length > 0 ? searchEvents.slice(0,5) : null}
            </div>
        )
    }
};