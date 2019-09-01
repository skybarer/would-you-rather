import React, {Component} from 'react';
import {Card} from "react-bootstrap";
import styled from 'styled-components';
import NavBar from "./NavBar";

const Wrapper = styled.section`
  min-width: 360px;
  max-width: 400px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 30px;
`;

const button = styled.button`
    min-width: 300px;
`;


const users = [
    {
        id: 1,
        key: 'Akash',
        value: 'Akash'
    },
    {
        id: 2,
        key: 'Vikas',
        value: 'Vikas'
    },
    {
        id: 3,
        key: 'Sarah',
        value: 'Sarah'
    }
];

class Login extends Component {
    render() {
        return (

            <div>
                <NavBar/>
                <Wrapper>
                    <Card>
                        <Card.Body>
                            <form>
                                <div className="form-group">
                                    <label>Select User</label>
                                    <select className="custom-select">
                                        {
                                            users.map((user) => {
                                                return <option key={user.id} value={user.value}>{user.key}</option>

                                            })
                                        }
                                    </select>
                                </div>
                                <button type="submit" className="btn btn-success">Login</button>
                            </form>
                        </Card.Body>
                    </Card>
                </Wrapper>
            </div>
        );
    }
}

export default Login;
