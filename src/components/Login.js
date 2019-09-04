import React, { PureComponent } from 'react';
import { Card } from 'react-bootstrap';
import styled from 'styled-components';
import NavBar from './NavBar';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Wrapper = styled.section`
	min-width: 360px;
	max-width: 400px;
	margin-left: auto;
	margin-right: auto;
	padding-top: 30px;
`;

const button = styled.button`min-width: 300px;`;

class Login extends PureComponent {
	static propTypes = {
		users: PropTypes.object.isRequired,
		setAuthedUser: PropTypes.func.isRequired
	};

	state = {
		userId: ''
	};

	onUserChange = (userId) => {
		this.setState({ userId });
	};

	onLogin = () => {
		const { userId } = this.state;
		const { setAuthedUser } = this.props;
		if (userId) {
			setAuthedUser(userId);
		}
	};

	render() {
		const { users } = this.props;
		const { userId } = this.state;
		return (
			<div>
				<NavBar />
				<Wrapper>
					<Card>
						<Card.Body>
							<form>
								<div className="form-group">
									<label>Select User</label>
									<select className="custom-select">
										{console.log(users)}
										{/* {users.map((user) => {
											return (
												<option key={user.id} value={user.value}>
													{user.key}
												</option>
											);
										})}) } */}
									</select>
								</div>
								<button
									onClick={this.onLogin}
									disabled={!userId}
									type="submit"
									className="btn btn-success"
								>
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

export default Login;
