
import React from "react";

class FlightSearch extends React.Component {

    state = {
        from: 'LAX',
        to: 'HND'
    }


    // TODO: combine these methods.. 
    // Is it possible to have an onChange method
    // that hardcodes the where to get the updated state?
    // i.e. onChange - always update the from/to state from the from/to inputs respectively
    handleInputFrom = (ev) => {
        this.setState({ from: ev.target.value });
    }
    handleInputTo = (ev) => {
        this.setState({ from: ev.target.value });
    }

    handleSubmit = (ev) => {
        console.log("form submitted");
        ev.preventDefault();
    } // handleSubmit

    render() {

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h2>Search Flights</h2>

                    <input type="text" name="Origin" placeholder="from" onChange={this.handleInputFrom} />
                    {/* 
                        TODO: create a list of origin airport codes for a dropdown
                    */}
                    <br />
                    <input type="text" name="Destination" placeholder="to" />
                    <br />
                    <button>Search Flights</button>
                    <hr />
                </form>
                <hr />
                <h3>Flight Search Results</h3>
                { /* Dummy Data */ }
                <table>
                    <tr>
                    <th>Date</th>
                    <th>Flight</th>
                    <th>From &gt; To</th>
                    <th>Plane</th>
                    </tr>
                    <tr>
                        <td>20/10/22</td>
                        <td>23</td>
                        <td>LAX &gt; HND</td>
                        <td>A380</td>
                    </tr>
                    <tr>
                        <td>22/10/22</td>
                        <td>23</td>
                        <td>LAX &gt; HND</td>
                        <td>A380</td>
                    </tr>
                    <tr>
                        <td>25/10/22</td>
                        <td>23</td>
                        <td>LAX &gt; HND</td>
                        <td>A380</td>
                    </tr>
                </table>
            </div>

        ); // return

    } // render

} // class FlightSearch

export default FlightSearch;