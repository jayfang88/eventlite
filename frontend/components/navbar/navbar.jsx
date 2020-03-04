import React from 'react';
import { Link } from 'react-router-dom';
import { AuthRoute } from '../../util/route_util';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

class NavBar extends React.Component {
    render() {
        return(
            <div className='navbar'>
                <Link to='/'><h1 id='logo-link'><span class='tilt-e'>e</span>v<span class='tilt-e'>e</span>ntlit<span class='tilt-e'>e</span></h1></Link>
                {/* <div id='nav-search'>Search for events</div> */}
                <FontAwesomeIcon id='search-icon' icon={faSearch} />
                <input id='nav-search' type="text" placeholder='Search for events'/>

                {/* LINK TO CREATE EVENT FORM,
                    anyone can view, but must be logged in to create */}
                {/* <Link to='/events/create'>Create Event</Link> */}
                <p id='create-event-link'>Create Event</p>

                {this.props.currentUser ? (
                        <button onClick={() => this.props.logout()} className='nav-signout'>Log Out</button>
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