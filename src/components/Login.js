import React, {PureComponent} from 'react';
import {Card} from 'react-bootstrap';
import styled from 'styled-components';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {setAuthUser} from '../actions/authedUser';

const Wrapper = styled.section`
	// min-width: 360px;
	// max-width: 400px;
	margin-left: auto;
	margin-right: auto;
	padding-top: 30px;
`;

const button = styled.button`min-width: 300px;`;

class Login extends PureComponent {
    static propTypes = {
        users: PropTypes.object.isRequired,
        setAuthUser: PropTypes.func.isRequired
    };

    state = {
        userId: ''
    };

    onUserChange = (userId) => {
        this.setState({userId});
    };

    onLogin = () => {
        const {userId} = this.state;
        const {setAuthUser} = this.props;
        if (userId) {
            setAuthUser(userId);
        }
    };

    render() {
        const {users} = this.props;
        const {userId} = this.state;
        return (
            <div>
                <Wrapper>
                    <Card>
                        <Card.Body>
                            <form>
                                <div className="form-group">
                                    <label>Select User</label>
                                    <select className="custom-select"
                                            value={userId}
                                            onChange={(event) => this.onUserChange(event.target.value)}>
                                        <option value="" disabled>
                                            Please select
                                        </option>
                                        {Object.keys(users).map((user) => (
                                            <option key={user} value={user}>
                                                {users[user].name}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <button
                                    onClick={this.onLogin}
                                    disabled={!userId}
                                    type="submit"
                                    className="btn btn-success">
                                    Login
                                </button>
                            </form>
                        </Card.Body>
                    </Card>
                </Wrapper>
            </div>
        );
    }
}

function mapStateToProps({users}) {
    return {
        users
    }
}

function mapDispatchToProps(dispatch) {
    return {
        setAuthUser: (id) => {
            dispatch(setAuthUser(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
