import React from 'react';
import { Link } from 'react-router-dom';

// const SearchResult = ({event}) => {
//     return(
//         <Link to={`/e/${event.id}`}
//             path={`/e/${event.id}`}
//             onClick={this.handleClick}>
//             <li className='search-event'>event.title</li>
//         </Link>
//     )
// };

// export default SearchResult;

export default class SearchResult extends React.Component {
    render() {
        const event = this.props.event;
        return(
            <li className='search-event'>
                <Link to={`/e/${event.id}`}
                    path={`/e/${event.id}`}
                    onClick={this.handleClick}>
                    {event.title}
                </Link>
            </li>
        )
    }
};