import * as React from "react";
import NavBar from "../components/NavBar";
import Login from "../components/Login";
import Template from "./Template";

class RoutePage extends React.Component {
    render() {
        return (
            <div>
                <Login/>
                {/*<Template/>*/}
            </div>
        )
    }
}

export default RoutePage;