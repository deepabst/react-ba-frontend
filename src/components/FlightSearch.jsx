import React from "react";
import FlightSearchForm from "./FlightSearchForm";
import { Route, HashRouter as Router, Link } from "react-router-dom";

class FlightSearch extends React.Component {
    render() {
        return (
            <div className="App">
                <Route component={FlightSearchForm} />
            </div>
        ); // return
    } // render
} // class FlightSearch

export default FlightSearch;