import React, {Component} from 'react';
import {Navbar, Nav, Button} from 'react-bootstrap';
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import {unsetAuthUser} from "../actions/authedUser";
import {Link, withRouter} from "react-router-dom";
import User from "./User";
import styled from 'styled-components';
import {LinkContainer} from 'react-router-bootstrap';

const Padding = styled.section`
	margin-left: 25px;
	margin-right: 25px;
	margin-top: -15px;
    margin-bottom: -15px;
`;

class NavBar extends Component {

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
                        <Link to='/' className='navbar-brand'> Would you Rather ?</Link>
                    </Navbar.Brand>
                    {authedUser &&
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">

                            <LinkContainer to="/">
                                <Nav.Link>Home</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/leaderboard">
                                <Nav.Link>Leader Board</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/add">
                                <Nav.Link>Add Question</Nav.Link>
                            </LinkContainer>
                        </Nav>
                        <Padding>
                            <User id={authedUser}/>
                        </Padding>
                        <Button variant="outline-success" onClick={this.logout}>Logout</Button>
                    </Navbar.Collapse>
                    }

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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavBar));