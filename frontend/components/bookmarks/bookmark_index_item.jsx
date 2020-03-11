import React from 'react';

class BookmarkIndexItem extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { event } = this.props.bookmark
        return(
            <div id='bookmark-item'>
                {event.title}
            </div>
        )
    }
};

export default BookmarkIndexItem;