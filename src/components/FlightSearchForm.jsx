import React from "react";

class FlightSearchForm extends React.Component {

    state = {
        origin: 'SYD',
        destination: 'SUV'
    }

    // TODO: combine these methods.. 
    // Is it possible to have an onChange method
    // that hardcodes the where to get the updated state?
    // i.e. onChange - always update the from/to state from the from/to inputs respectively
    handleInputOrigin = (ev) => {
        this.setState({ origin: ev.target.value });
    }
    handleInputDestination = (ev) => {
        this.setState({ destination: ev.target.value });
    }
    handleSubmit = () => {
        console.log(`form submitted: new route should be:${this.props.match.url}}`);
        // navigate to /flights/:origin/:destination
        this.props.history.push(`/flights/${this.state.origin}/${this.state.destination}`)

    } // handleSubmit


    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h2>Search Flights</h2>

                <input type="text" name="Origin" placeholder="origin" onChange={this.handleInputOrigin} />
                <br />
                <input type="text" name="Destination" placeholder="destination" onChange={this.handleInputDestination} />
                <br />
                <button>Search Flights</button>
                <hr />
            </form>

        ); // return
    } // render

} // class FlightSearchForm
export default FlightSearchForm;