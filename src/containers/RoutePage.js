import * as React from "react";
import NavBar from "../components/NavBar";
import Login from "../components/Login";

class RoutePage extends React.Component {
    render() {
        return (
            <div>
                <NavBar/>
                <Login/>
            </div>
        )
    }
}

export default RoutePage;