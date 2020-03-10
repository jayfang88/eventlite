import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';


class UserShow extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchTickets()
    }

    render() {
        const { user, tickets } = this.props
        if (!tickets) return null;
        return(
            <div id='user-show-page'>
                <div id='user-show'>
                    <div id='user-show-namebox'>
                        <FontAwesomeIcon icon={faUser} />
                        <div>{user.fname} {user.lname}</div>
                    </div>
                    <div id='user-show-main'>
                        <div id='tickets-index'>
                            {/* TICKETS INDEX or EVENTS INDEX */}
                        </div>
                        <div id='bookmarks-index'>
                            {/* BOOKMARKS INDEX or EVENTS INDEX */}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

export default UserShow;