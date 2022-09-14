
import React from "react";
import axios from "axios";
import FlightSearchForm from "./FlightSearchForm";

const RAILS_BA_BASE_URL = 'http://localhost:3000/flights'; // flights BE


function FlightItem(props) {
    console.log(`props:`,props.flight);
    return (
        <li>
            <strong>
                {props.flight.id}
                <br />
                {props.flight.flight}
                <br />
                {props.flight.origin}
                <br />
                {props.flight.destination}
            </strong>
        </li>
    );
} // FlightItem()

class FlightSearch extends React.Component {

    state = {
        flights: [],    // stores API results
        loading: true, // check if we are ready to show results
        error: null    // any errors?
    }

    handleSubmit = (ev) => {
        console.log("form submitted");
        ev.preventDefault();

    } // handleSubmit

    fetchFlights = async (origin, destination) => {
        try {
            const res = await axios.get(RAILS_BA_BASE_URL+'/'+origin+'/'+destination);
            console.log('response', res.data);

            this.setState({
                flights: res.data, //.reverse() array of flights
                loading: false
            });
        } catch (error) {
            console.error('Error loading flights from API', error);

            this.setState({
                loading: false,
                error: error // store the error
            })
        } // catch

    } // fetchFlights()

    render() {

        return (
            <div className="App">
            <h3>Flight Search</h3>
            <FlightSearchForm notifyParent={this.fetchFlights} />
            <h3>Flights to the world</h3>

            {
                this.state.loading
                    ?
                    <p>Loading Flights....</p>
                    :
                    <ul>
                        {this.state.flights.map(f => <FlightItem key={f.id} flight={f} />)}
                    </ul>
            }
        </div>

        ); // return

    } // render

} // class FlightSearch

export default FlightSearch;