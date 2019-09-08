import React from 'react';
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {Card, ListGroup} from "react-bootstrap";
import {withRouter} from 'react-router-dom'

const Poll = (props) => {

    const loadDetails = (e, id) => {
        e.preventDefault();
        props.history.push(`/questions/${id}`)
    };

    const {poll} = props;

    return (
        <Card onClick={(e) => loadDetails(e, poll.id)}>
            <Card.Body>
                <Card.Title>Would You Rather</Card.Title>
                <ListGroup>
                    <ListGroup.Item>{poll.optionOne.text}</ListGroup.Item>
                    <ListGroup.Item>{poll.optionTwo.text}</ListGroup.Item>
                </ListGroup>
            </Card.Body>
        </Card>
    )
};

Poll.propTypes = {
    poll: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
};

function mapStateToProps({polls}, {id}) {
    return {
        poll: polls[id]
    }
}

export default withRouter(connect(mapStateToProps)(Poll));