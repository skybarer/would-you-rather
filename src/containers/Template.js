import * as React from "react";
import NavBarDashboard from "../components/NavBarDashboard";
import Home from "./Home";

class Template extends React.Component {
    render() {
        return (
            <div>
                <NavBarDashboard/>
                <Home/>
            </div>
        )
    }
}

export default Template;