import React from 'react';
import {
    Link, Switch, Route, useParams,
    useHistory, Redirect, useLocation
} from 'react-router-dom';

const Home = () => {
    const history = useHistory();
    console.log(history);
    const handleClick = (param) => {
        history.push(`/contact/${param}`, { data: "asdf" });
    }

    return (
        <div>
            <h1>Home ....</h1>
            <button onClick={() => history.goBack()}>go back</button>
            <button onClick={() => handleClick(1)}>Route to 1</button>
            <button onClick={() => handleClick(2)}>Route to 2</button>
            <button onClick={() => handleClick(3)}>Route to 3</button>
        </div>
    );
};

const Contact = () => {
    const location = useLocation();
    const param = useParams();
    console.log(location);
    /* Boolean() use to convert string, numeric value to boolean. */
    return <h1>Contact ... {param.id} {Boolean(param.id2) && param.id2}</h1>;
}
const About = () => <h1>About Us ...</h1>;
const Dashboard = () => <h1>Dashboard ...</h1>;
const NotFound = () => <h1>Not Found ...</h1>;

const RoutingExample = () => {
    const contactArray = [1, 2, 3, 4];

    return (
        <div>RoutingExample
            <ul>
                <li> <Link to='/'>Home</Link></li>
                <li> <Link to='/contact'> Contact</Link></li>
                {contactArray.map(each => (
                    <li key={each}>
                        <Link to={`/contact/${each}`}> Contact {each}</Link>
                    </li>
                ))}
                <li><Link to='/contact/1/5'>Contact 1 - 5</Link></li>
                <li><Link to='/contact'> Contact</Link></li>
                <li><Link to='/contact?name=asdfsad'>Contact Query Param</Link></li>
                <li><Link to='/about'>About Us</Link></li>
                <li><Link to='/dashboard'>Dashboard</Link></li>
                <li><Link to='/asdf'>asdf</Link></li>
            </ul>
            <Switch>
                {/* "exact" - MUST BE SPECIFIED FOR ROUTES THAT HAS POSSIBILITY
                    OF MATCHING WITH OTHER ROUTES.
                */}
                <Route path='/' exact component={Home} />
                <Route path='/contact' exact component={Contact} />
                <Route path='/contact/:id' exact component={Contact} />
                <Route path='/contact/:id/:id2' component={Contact} />
                <Route path='/about' component={About} />
                <Route path='/dashboard' component={Dashboard} />
                <Route path='/not-found' component={NotFound} />
                {/* NOT FOUND SHOULD ALWAYS BE PLACE AT THE BOTTOM AS IT MATCHES WITH EVERY ROUTE. */}
                <Redirect from='*' to='/not-found' />
            </Switch>
        </div>
    )
}

export default RoutingExample;