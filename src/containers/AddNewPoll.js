import React, {Component} from 'react';
import {connect} from "react-redux";
import {Button, Card, Form} from "react-bootstrap";
import PropTypes from "prop-types";
import {handleAddPoll} from "../actions/shared";

class AddNewPoll extends Component {
    static propTypes = {
        addPoll: PropTypes.func.isRequired,
        history: PropTypes.object.isRequired
    };

    state = {
        optionOne: '',
        optionTwo: ''
    };

    handleOptionOneChange = (e) => {
        e.preventDefault();
        this.setState({
            optionOne: e.target.value
        })
    };

    handleOptionTwoChange = (e) => {
        e.preventDefault();
        this.setState({
            optionTwo: e.target.value
        })
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const {optionOne, optionTwo} = this.state;
        this.props.addPoll(optionOne, optionTwo);
        const {history} = this.props;
        history.push('/')
    };


    render() {
        const {optionOne, optionTwo} = this.state;

        return (
            <div>
                <Card>
                    <Card.Body>
                        <Card.Title>Would You Rather</Card.Title>
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Group>
                                <Card.Text>Enter Option One for first check box:</Card.Text>
                                <Form.Control type="text"
                                              name="optionOne"
                                              value={optionOne}
                                              onChange={this.handleOptionOneChange}
                                              placeholder="Option One for question"/>
                            </Form.Group>
                            <Form.Group>
                                <Card.Text>Enter Option Two for second check box:</Card.Text>
                                <Form.Control type="text"
                                              name="optionTwo"
                                              value={optionTwo}
                                              onChange={this.handleOptionTwoChange}
                                              placeholder="Option Two for question"/>
                            </Form.Group>
                            <Button disabled={optionOne === '' || optionTwo === ''}
                                    onClick={this.handleSubmit}>Submit</Button>
                        </Form>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addPoll: (optionOne, optionTwo) => {
            dispatch(handleAddPoll(optionOne, optionTwo))
        }
    }
}

export default connect(null, mapDispatchToProps)(AddNewPoll);