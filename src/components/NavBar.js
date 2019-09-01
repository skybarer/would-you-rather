import React, {Component} from 'react';
import {Navbar} from 'react-bootstrap';

class NavBar extends Component {
    render() {
        return (
            <div>
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="/">Woud you Rather ?</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}

export default NavBar;
