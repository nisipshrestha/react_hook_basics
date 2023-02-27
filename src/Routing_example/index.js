import React from 'react';
import { Link } from 'react-router-dom';
import RouteComponent from './RouteComponent';

const RoutingExample = () => {
    const contactArray = [1, 2, 3, 4];

    return (
        <div>
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
                <li><Link to='/contact?name=a'>Contact Query Param</Link></li>
                <li><Link to='/about'>About Us</Link></li>
                <li><Link to='/dashboard'>Dashboard</Link></li>
                <li><Link to='/asdf'>asdf</Link></li>
            </ul>
            <h2>RoutingExample</h2>
            <RouteComponent />
        </div>
    )
}

export default RoutingExample;