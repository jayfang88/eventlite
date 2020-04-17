import React from 'react';
import { Link } from 'react-router-dom';
import { AuthRoute } from '../../util/route_util';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faPlusSquare } from '@fortawesome/free-regular-svg-icons';
import { faTicketAlt } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

import SearchBarContainer from './search_bar_container';

class NavBar extends React.Component {
    handleLogout() {
        this.props.logout();
        location.reload();
    }
    render() {
        let currentUser = this.props.currentUser;
        return(
            <div className='navbar'>
                <Link to='/'><h1 id='logo-link'>
                    <span className='tilt-e'>e</span>v
                    <span className='tilt-e'>e</span>ntlit
                    <span className='tilt-e'>e</span></h1>
                </Link>
                <FontAwesomeIcon id='search-icon' icon={faSearch} />
                <SearchBarContainer />

                <Link className='nav-link' id='create-link' to='/create'>
                    {this.props.currentUser ? (
                        <FontAwesomeIcon className='link-icon'
                            icon={faPlusSquare} />
                    ) : (
                        ''
                    )}
                    Create Event
                </Link>

                {this.props.currentUser ? (
                    <Link className='nav-link' id='tickets-link'
                    to={`/u/${currentUser.id}`}>
                        <FontAwesomeIcon className='link-icon' 
                        id='tickets-link-icon' icon={faTicketAlt} />
                        Tickets
                    </Link>
                ) : (
                    ''
                )}

                {this.props.currentUser ? (
                    <div className='nav-user'>
                        <FontAwesomeIcon className='user-icon' icon={faUser} />
                        <FontAwesomeIcon className='user-icon-caret'
                        icon={faAngleDown} />
                        <div className='nav-dropdown'>
                            <Link to={`/u/${currentUser.id}`}>
                                <button className='dropdown-item' 
                                id='user-link'>{currentUser.fname} {currentUser.lname}<br />
                                <span id='user-link-email'>
                                    {currentUser.email}
                                </span>
                                </button>
                            </Link>
                            <Link to={`/u/${currentUser.id}`}>
                                <button className='dropdown-item'>Tickets</button>
                            </Link>
                            <Link to={`/u/${currentUser.id}`}>
                                <button className='dropdown-item'>Bookmarks</button>
                            </Link>
                            <Link to='/create'>
                                <button className='dropdown-item'>Create Event</button>
                            </Link>
                            <button onClick={() => this.handleLogout()}
                                className='dropdown-item' id='logout-link'>Log Out
                            </button>
                        </div>
                    </div>
                ) : (
                    <div id='nav-link-holder'>
                        <Link to='/login' className='nav-link'>Log In</Link>
                        <Link to='/signup' className='nav-link'>Sign Up</Link>
                    </div>
                )}
            </div>
        )
    }
};

export default NavBar;