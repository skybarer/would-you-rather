import React, { Component, Fragment } from 'react';
import './App.css';
import RoutePage from './containers/RoutePage';
import LoadingBar from 'react-redux-loading';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import Login from '.components/Login';
import { handleInitialData } from './actions/shared';
class App extends Component {
	static propTypes = {
		handleInitialData: PropTypes.func.isRequired,
		notLoggedIn: PropTypes.bool.isRequired
	};
	render() {
		const { notLoggedIn } = this.props;
		return (
			// <RoutePage />

			<Router>
				<Fragment>
					<LoadingBar className="loading-bar" />
					<div className="main-container">
						{/* <NavBar /> */}
						<div className="container">
							<Switch>
								{notLoggedIn ? (
									<Route path="/" exact component={RoutePage} />
								) : (
									<Fragment>
										{/* <Route path="/" exact component={Dashboard} /> */}
										{/* <Route path="/questions/:id" component={PollDetails} />
										<Route path="/add" component={NewPoll} />
										<Route path="/leaderboard" component={LeaderBoard} /> */}
									</Fragment>
								)}
								{/* <Route component={NotFound} /> */}
							</Switch>
						</div>
					</div>
				</Fragment>
			</Router>
		);
	}
}

function mapStateToProps({ authedUser }) {
	return {
		notLoggedIn: authedUser === null
	};
}

function mapDispatchToProps(dispatch) {
	return {
		handleInitialData: () => {
			dispatch(handleInitialData());
		}
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
