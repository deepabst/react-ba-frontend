import React from "react";

class FlightSearchForm extends React.Component {

    state = {
        origin: 'LAX',
        destination: 'HND'
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
    handleSubmit = (ev) => {
        console.log("form submitted");
        ev.preventDefault();

        // we want to make a request to the Rails BE
        // do a search for flights from <Origin> to <Destination>
        // come back and print the results

        // do somethign with the props from FlightSearch
        this.props.notifyParent(this.state.secretText);

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