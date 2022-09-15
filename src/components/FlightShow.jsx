import React from "react";
import { Route, HashRouter as Router, Link } from "react-router-dom";


class FlightShow extends React.Component {

    render() {
        return (
            <li>
                <Link to={"/flights/" + this.props.flight.id}>
                {this.props.flight.id}&nbsp;
                <strong>{this.props.flight.flight}</strong>&nbsp;
                {this.props.flight.origin}&nbsp;
                {this.props.flight.destination}&nbsp;
                </Link>
            </li>
        ); // return
    } // render
} // class FlightShow

export default FlightShow;