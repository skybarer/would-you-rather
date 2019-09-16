import React, {PureComponent} from 'react';
import {connect} from "react-redux";
import {Redirect} from "react-router";
import {Button, Card, Col, Form, Row} from "react-bootstrap";
import User from "../components/User";
import PropTypes from 'prop-types';
import {formatDate} from "../utils/helpers";
import {handleSavePollAnswer} from '../actions/shared';

class PollDetails extends PureComponent {

    static propTypes = {
        id: PropTypes.object.isRequired,
        polls: PropTypes.string.isRequired,
        users: PropTypes.object.isRequired,
        authedUser: PropTypes.string.isRequired
    };

    state = {
        selectedOption: ''
    };

    radioSelected = (e) => {
        this.setState({selectedOption: e.target.value});
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.savePollAnswer(this.state.selectedOption);
    };

    render() {
        const {id, polls, users, authedUser} = this.props;
        const poll = polls[id];
        if (!poll) {
            return (
                <Redirect to="/404"/>
            );
        }

        const check = (
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="13" viewBox="0 0 15 13">
                <path fill="#40C057" fillRule="nonzero"
                      d="M4.714 12.399L.093 7.359a.368.368 0 0 1 0-.49l1.77-1.93a.298.298 0 0 1 .448 0l2.627 2.866L12.002.101a.298.298 0 0 1 .448 0l1.77 1.93a.368.368 0 0 1 0 .49l-9.058 9.878a.299.299 0 0 1-.448 0z"/>
            </svg>
        );


        const pollAuthor = users[poll.author];
        const isOptionOneAnswered = poll.optionOne.votes.includes(authedUser);
        const isOptionTwoAnswered = poll.optionTwo.votes.includes(authedUser);
        const isAnswered = isOptionOneAnswered || isOptionTwoAnswered;

        const optionOneVotes = poll.optionOne.votes.length;
        const optionTwoVotes = poll.optionTwo.votes.length;
        const percentageOptionOne = (optionOneVotes / (optionOneVotes + optionTwoVotes) * 100).toFixed(2);
        const percentageOptionTwo = (optionTwoVotes / (optionOneVotes + optionTwoVotes) * 100).toFixed(2);
        const {selectedOption} = this.state;


        return (
            <div>
                <Card>
                    <Card.Header>
                        <User id={pollAuthor.id}/>
                        <div className="date">{formatDate(poll.timestamp)}</div>
                    </Card.Header>
                    <Card.Body>
                        <Card.Title>Would You Rather</Card.Title>
                        {isAnswered ?
                            <ul>
                                <li>{poll.optionOne.text} ({optionOneVotes} vote(s)
                                    | {percentageOptionOne} {'  '}%){isOptionOneAnswered ? check : null}</li>
                                <li>{poll.optionTwo.text} ({optionTwoVotes} vote(s)
                                    | {percentageOptionTwo} {'  '}%){!isOptionOneAnswered ? check : null}</li>
                            </ul> :
                            <Form onSubmit={this.handleSubmit}>
                                <Form.Group as={Row}>
                                    <Col>
                                        <Form.Group>
                                            <Form.Check
                                                type="radio"
                                                label={poll.optionOne.text}
                                                name="pollDetails"
                                                id="pollDetails1"
                                                value="optionOne"
                                                onChange={this.radioSelected}
                                            />
                                        </Form.Group>
                                        <Form.Group>
                                            <Form.Check
                                                type="radio"
                                                label={poll.optionTwo.text}
                                                name="pollDetails"
                                                id="pollDetails2"
                                                value="optionTwo"
                                                onChange={this.radioSelected}
                                            />
                                        </Form.Group>
                                    </Col>
                                </Form.Group>
                                <Button type="submit" disabled={selectedOption === ''}>Submit</Button>
                            </Form>

                        }
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

function mapStateToProps({polls, users, authedUser}, props) {
    const {id} = props.match.params;
    return {
        id,
        polls,
        users,
        authedUser
    }
}

function mapDispatchToProps(dispatch, props) {
    const {id} = props.match.params;
    return {
        savePollAnswer: (answer) => {
            dispatch(handleSavePollAnswer(id, answer))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PollDetails);