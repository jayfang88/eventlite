import React from 'react';

export default class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.searchQuery = this.props.searchQuery;
        this.handleSearch = this.handleSearch.bind(this);
    }
    
    componentDidMount() {
        this.props.requestEvents();
    }

    handleInput() {
        this.searchQuery = event.target.value;
    }

    parseEvents() {
        
    }

    render() {
        return(
            <input id='nav-search'
            type="text" 
            placeholder='Search for events'
            onChange={this.handleInput} />
        )
    }
};