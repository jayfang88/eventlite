import React from 'react';
import { Provider } from 'react-redux';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';

import GreetingContainer from './greeting/greeting_container';
import SignupFormContainer from './signin/signup_form_container';
import LoginFormContainer from './signin/login_form_container';
import { AuthRoute } from '../util/route_util';
import NavBarContainer from '../components/navbar/navbar_container';
import ForgotPassword from '../components/signin/forgot_password';
import SplashContainer from '../components/splash/splash_container';
import EventIndexContainer from './events/event_index_container';
import EventShowContainer from './events/event_show_container';


const App = () => (
    <div>
        <header>
            <NavBarContainer />
            {/* <GreetingContainer /> */}
        </header>

        <Switch>
            <Route exact path='/' component={SplashContainer} />
            <Route exact path='/events/:eventId' component={EventShowContainer} />
            <AuthRoute exact path='/login' component={LoginFormContainer} />
            <AuthRoute exact path='/signup' component={SignupFormContainer} />
            <AuthRoute exact path='/forgotpassword' component={ForgotPassword} />
        </Switch>
    </div>
);

export default App;