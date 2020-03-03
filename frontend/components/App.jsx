import React from 'react';
import { Provider } from 'react-redux';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';

import GreetingContainer from './greeting/greeting_container';
import SignupFormContainer from './signin/signup_form_container';
import LoginFormContainer from './signin/login_form_container';


const App = () => (
    <div>
        <header>
            <h1>Eventbrite</h1>
            <GreetingContainer />
        </header>

        <Route path='/login' component={LoginFormContainer} />
        <Route path='/signup' component={SignupFormContainer} />
    </div>
);

export default App;