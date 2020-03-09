import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';


class UserShow extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        // debugger;
        this.props.fetchTickets()
        debugger;
    }

    render() {
        const { user } = this.props
        return(
            <div>
                <FontAwesomeIcon icon={faUser} />
                <div>{user.fname} {user.lname}</div>
            </div>
        )
    }
};

export default UserShow;