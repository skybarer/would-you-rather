import React, {Component} from 'react';
import {Card} from "react-bootstrap";
import styled from 'styled-components';

const Wrapper = styled.section`
  min-width: 360px;
  max-width: 400px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 30px;
`;


class Login extends Component {
    render() {
        return (
            <div>
                <Wrapper>
                    <Card>
                        <Card.Body>
                            <form>
                                <div className="form-group">
                                    <label>Email address</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1"
                                           aria-describedby="emailHelp" placeholder="Enter email"/>
                                </div>
                                <div className="form-group">
                                    <label>Password</label>
                                    <input type="password" className="form-control" id="exampleInputPassword1"
                                           placeholder="Password"/>
                                </div>
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </form>
                        </Card.Body>
                    </Card>
                </Wrapper>
            </div>
        );
    }
}

export default Login;
