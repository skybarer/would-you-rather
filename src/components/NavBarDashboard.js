import React, {Component} from 'react';
import {Navbar, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap';

class NavBarDashboard extends Component {
    render() {
        return (
            <div>
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#leaderBoard">LeaderBoard</Nav.Link>
                            <Nav.Link href="#addQuestion">AddQuestion</Nav.Link>
                        </Nav>
                        <Button variant="outline-success">Logout</Button>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}

export default NavBarDashboard;
