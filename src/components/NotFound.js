import React, {Component} from 'react';
import {Link} from "react-router-dom";

class NotFound extends Component {
    render() {
        return (
            <div className="container">
                <p className="text-center">Error 404 Url Not Found</p>
                <Link to='/'> click here to go to login page </Link>
            </div>
        );
    }
}

export default NotFound;
