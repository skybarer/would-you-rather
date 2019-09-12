import React, {Component} from 'react';
import Poll from "../components/Poll";
import {Tab, Tabs} from "react-bootstrap";
import {connect} from "react-redux";


const Home = () => { // insert props as arguments here if any
    const {answeredPolls, unansweredPolls} = this.props;
    return (
        <div className="container">
            <Tabs defaultActiveKey="Unanswered" transition={false} id="noanim-tab-example">
                <Tab eventKey="Unanswered" title="Unanswered">
                    {unansweredPolls.map(qid =>
                        <div key={qid}>
                            <Poll id={qid}/>
                        </div>
                    )}
                </Tab>
                <Tab eventKey="Answered" title="Answered">
                    {answeredPolls.map(qid =>
                        <div key={qid}>
                            <Poll id={qid}/>
                        </div>
                    )}
                </Tab>
            </Tabs>
        </div>
    )
};

function mapStateToProps({polls, users, authedUser}) {
    const user = users[authedUser];
    const answeredPolls = Object.keys(user.answers)
        .sort((a, b) => polls[b].timestamp - polls[a].timestamp);
    return {
        answeredPolls,
        unansweredPolls: Object.keys(polls).filter(qid => !answeredPolls.includes(qid))
            .sort((a, b) => polls[b].timestamp - polls[a].timestamp)
    }
}

export default connect(mapStateToProps)(Home);