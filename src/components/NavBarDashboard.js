import React, {Component} from 'react';
import {Navbar, Nav, Button, NavItem} from 'react-bootstrap';
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import {unsetAuthUser} from "../actions/authedUser";
import {Link, withRouter} from "react-router-dom";
import User from "./User";
import styled from 'styled-components';
import LeaderBoard from "../containers/LeaderBoard";
import {Route} from "react-router";

const Padding = styled.section`
	margin-left: 25px;
	margin-right: 25px;
	margin-top: -15px;
    margin-bottom: -15px;
`;

class NavBarDashboard extends Component {

    static propTypes = {
        logout: PropTypes.func.isRequired,
        authedUser: PropTypes.string,
        history: PropTypes.object.isRequired
    };

    state = {
        isOpen: false
    };

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    };

    logout = (e) => {
        e.preventDefault();
        const {history, logout} = this.props;
        history.push('/');
        logout()
    };

    render() {
        const {authedUser} = this.props;
        return (
            <div>
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand>
                        <NavItem href="/"> Woud you Rather ?</NavItem>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link tag={Link} to="/">Home</Nav.Link>
                            <Nav.Link tag={Link} to="/leaderboard">Leader board</Nav.Link>
                            <Nav.Link tag={Link} to="/addQuestion">Add Question</Nav.Link>
                        </Nav>
                        <Padding>
                            <User id={authedUser}/>
                        </Padding>
                        <Button variant="outline-success" onClick={this.logout}>Logout</Button>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}

function mapStateToProps({authedUser}) {
    return {
        authedUser
    }
}

function mapDispatchToProps(dispatch) {
    return {
        logout: () => {
            dispatch(unsetAuthUser())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBarDashboard);
