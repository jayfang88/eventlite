import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
    render() {
        return(
            <div className='navbar'>
                <Link to='/'><h1 id='logo-link'>eventlite</h1></Link>
                <Link to='/signup'>Sign In</Link>
                <Link to='/login'>Log In</Link>
            </div>
        )
    }
};

export default NavBar;