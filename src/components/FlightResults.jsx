import React from "react";
import axios from "axios";
import FlightShow from "./FlightShow";

const RAILS_BA_BASE_URL = 'http://localhost:3000/'; // flights BE

class FlightResults extends React.Component {

    state = {
        flights: [],    // stores API results
        loading: true,  // check if we are ready to show results
        error: null     // any errors?
    }

    // method to make the request to the BE
    fetchFlights = async (searchFlightURL) => {
        try {
            const res = await axios.get(RAILS_BA_BASE_URL + searchFlightURL);
            this.setState({
                flights: res.data, // array of flights
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

    componentDidMount() {
        // Make the call to the backend
        this.fetchFlights(this.props.match.url)
    }

    render() {
        return (
            <div>
                <h3>Search Results</h3>
                {
                    this.state.loading
                    ?
                    <p>Loading Flights....</p>
                    :
                    <ul>
                            {this.state.flights.map(f => <FlightShow key={f.id} flight={f} />)}
                    </ul>
                }
            </div>
        ); // return
    } // render
} // class FlightResults

export default FlightResults;