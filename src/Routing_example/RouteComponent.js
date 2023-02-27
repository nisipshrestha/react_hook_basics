import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import Dashboard from './components/Dashboard';
import Unauthorized from './components/Unauthorized';
import NotFound from './components/NotFound';
import ProtectedRoute from './ProtectedRoute';

const RouteComponent = () => {
    return (
        <Switch>
            {/* "exact" - MUST BE SPECIFIED FOR ROUTES THAT HAS POSSIBILITY
        OF MATCHING WITH OTHER ROUTES.
        */}
            <Route path='/' exact component={Home} />
            <Route path='/contact' exact component={Contact} />
            <Route path='/contact/:id' exact component={Contact} />
            <Route path='/contact/:id/:id2' component={Contact} />
            <Route path='/about' component={About} />
            <ProtectedRoute path='/dashboard' component={Dashboard} />
            <Route path='/not-found' component={NotFound} />
            <Route path='/unauthorized' component={Unauthorized} />
            {/* NOT FOUND SHOULD ALWAYS BE PLACE AT THE BOTTOM AS IT MATCHES WITH EVERY ROUTE. */}
            <Redirect from='*' to='/not-found' />
        </Switch>
    );
};

export default RouteComponent