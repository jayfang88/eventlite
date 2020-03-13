import React from 'react';
import { Link } from 'react-router-dom';
import { AuthRoute } from '../../util/route_util';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

class NavBar extends React.Component {
    render() {
        let currentUser = this.props.currentUser;
        return(
            <div className='navbar'>
                <Link to='/events/all'><h1 id='logo-link'><span className='tilt-e'>e</span>v<span className='tilt-e'>e</span>ntlit<span className='tilt-e'>e</span></h1></Link>
                <FontAwesomeIcon id='search-icon' icon={faSearch} />
                <input id='nav-search' type="text" placeholder='Search for events'/>

                <p id='create-event-link'><Link id='create-link' to='/create'>Create Event</Link></p>

                {this.props.currentUser ? (
                    <div className='nav-user'>
                        <FontAwesomeIcon className='user-icon' icon={faUser} />
                        <FontAwesomeIcon className='user-icon-caret' icon={faAngleDown} />
                        <div className='nav-dropdown'>
                            <Link to={`/u/${currentUser.id}`}><button className='dropdown-item' id='user-link'>{currentUser.fname} {currentUser.lname}<br /> <span id='user-link-email'>{currentUser.email}</span></button></Link>
                            <Link to={`/u/${currentUser.id}`}><button className='dropdown-item'>Tickets</button></Link>
                            <Link to={`/u/${currentUser.id}`}><button className='dropdown-item'>Bookmarks</button></Link>
                            <Link to='/create'><button className='dropdown-item'>Create Event</button></Link>
                            <button onClick={() => this.props.logout()} className='dropdown-item' id='logout-link'>Log Out</button>
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