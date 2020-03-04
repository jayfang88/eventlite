import React from 'react';

class Splash extends React.Component {
    constructor(props) {
        super(props)
    };

    render() {
        return(
            <div id='splash-container'>
                <div id='splash-bg-image'></div>
                <div id='splash-img-container'><img id='splash=image' src="https://images.unsplash.com/photo-1508973379184-7517410fb0bc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3300&q=80" alt="splash-img" /></div>
            </div>
        )
    }
};

export default Splash;