import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';

import SignupFormContainer from './signin/signup_form_container';
import LoginFormContainer from './signin/login_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import NavBarContainer from '../components/navbar/navbar_container';
import ForgotPassword from '../components/signin/forgot_password';
import SplashContainer from '../components/splash/splash_container';
import EventShowContainer from './events/event_show_container';
import CreateEventContainer from './events/create_event_container';
import UpdateEventFormContainer from './events/update_event_container';
import UserShowContainer from './user/user_show_container';
import TicketShowContainer from './tickets/ticket_show_container';
import Footer from './footer';
import Modal from './modal/modal';


const App = () => (
    <div>
        <Modal />
        <header>
            <NavBarContainer />
        </header>

        <Switch>
            <Route exact path='/' component={SplashContainer} />
            <Route exact path='/e/:eventId' component={EventShowContainer} />
            <AuthRoute exact path='/login' component={LoginFormContainer} />
            <AuthRoute exact path='/signup' component={SignupFormContainer} />
            <AuthRoute exact path='/forgotpassword' component={ForgotPassword} />
            <ProtectedRoute exact path='/create' component={CreateEventContainer} />
            <ProtectedRoute exact path='/e/:eventId/edit' component={UpdateEventFormContainer} />
            <ProtectedRoute exact path='/u/:userId' component={UserShowContainer} />
            <ProtectedRoute exact path='/u/:userId/t/:ticketId' component={TicketShowContainer} />
        </Switch>

        <Footer />
    </div>
);

export default App;