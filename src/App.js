import './App.css';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import LoadingBar from 'react-redux-loading';
import React, {PureComponent, Fragment} from 'react';
import {handleInitialData} from './actions/shared';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from "./components/NavBar";
import Login from "./components/Login";
import PollDetails from "./containers/PollDetails";
import LeaderBoard from "./containers/LeaderBoard";
import NotFound from "./components/NotFound";
import Home from "./containers/Home";
import AddNewPoll from "./containers/AddNewPoll";


class App extends PureComponent {
    static propTypes = {
        handleInitialData: PropTypes.func.isRequired,
        notLoggedIn: PropTypes.bool.isRequired
    };

    componentDidMount() {
        this.props.handleInitialData();
    }

    render() {
        const {notLoggedIn} = this.props;

        return (
            <Router>
                <Fragment>
                    <LoadingBar className="loading-bar"/>
                    <div className="main-container">
                        <NavBar/>
                        <div className="container">
                            <Switch>
                                {notLoggedIn ?
                                    <Route path='/' component={Login}/>
                                    :
                                    <Fragment>
                                        <Route exact path="/" component={Home}/>
                                        <Route exact path="/add" component={AddNewPoll}/>
                                        <Route exact path="/leaderboard" component={LeaderBoard}/>
                                        <Route exact path="/questions/:id" component={PollDetails}/>
                                        <Route path='/404' component={NotFound}/>
                                    </Fragment>
                                }
                            </Switch>
                        </div>

                    </div>
                </Fragment>
            </Router>
        );
    }
}

function mapStateToProps({authedUser}) {
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
