
import React from "react";
import '../App.css';

import FlightSearch from "./FlightSearch";
import BookFlight from "./BookFlight";
import SelectSeat from "./SelectSeat";

import { Route, HashRouter as Router, Link } from "react-router-dom";

class Airplane extends React.Component {

    render(){

        return (

            <div className="App" >
            <Router>

                <h1>Create Plane</h1>
                <hr />
                <nav>
                    <Link to='/airplanes'>Home</Link>
                    {' '}|{' '}
                    <Link to='/flights'>Book Flight</Link>
                    {' '}|{' '}
                    <Link to='/search'>Search Results</Link>
                    {' '}|{' '}
                    <Link to='/flight/:id'>Seat Selection</Link>
                    
                    <br />
                    <hr />
                
                </nav>

              <FlightSearch /> 
              <br />

                <Route exact path="/airplanes"    component={ Airplane } />
                <Route exact path="/flights"      component={ BookFlight } />
                <Route exact path="/search"       component={ FlightSearch } />
                <Route exact path="/flight/:id"   component={ SelectSeat } /> 

            </Router>
            </div>

        );

    }

}

export default Airplane;