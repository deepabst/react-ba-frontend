import React from "react";
import axios from "axios";

const RAILS_BA_BASE_URL = 'http://localhost:3000/api'; // flights BE


function Seat(props){
    console.log(`Reservations:`, props.reservations)
    return(
        <span className="seat">{props.row},{props.col}</span>
    );
}

class SelectSeat extends React.Component {
    state = {
        flight: {},    // stores API results
        loading: true,  // check if we are ready to show results
        error: null     // any errors?
    }

    // method to make the request to the BE
    fetchFlight = async (searchFlightURL) => {
        try {
            console.log(`request started searchFLightURL:`, searchFlightURL);
            console.log(`axios URL: `, (RAILS_BA_BASE_URL + searchFlightURL));
            const res = await axios.get(RAILS_BA_BASE_URL + searchFlightURL);
            console.log(res)

            this.setState({
                flight: res.data, // array of flights
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
        // make a request to the BE for a single flight
        console.log(`this.props.match.url=`, this.props.match.url);
        this.fetchFlight(this.props.match.url)
    } // componentDidMount

renderSeat(){
    return(
        <Seat />
    );
}

    render() {

        // create a row array
        const row = [];
        let k = 0; //key
        // add the number rows
        for (let i = 0; i < 3; i++) {
            // nested loop add columns
            const col = [];
            for (let j = 0; j < 3; j++) {
                col.push(<Seat row={i} col={j} reservations={this.state.flight.reservations}/>);
                k++;
            }
            row.push(<div key={k} className="board-row">{col}</div>);
        }
        
        
        
        // in return - add rows array
        return (
            <div>
                <h2>Select Seat</h2>
                {/* {this.state.flight.id}&nbsp; */}
                {this.state.flight.date}&nbsp;
                <strong>Flight {this.state.flight.flight}</strong>&nbsp;
                {this.state.flight.origin}&nbsp;
                &gt;&nbsp;
                {this.state.flight.destination}&nbsp;

                <h3>Seating Plan</h3>
                {this.state.loading
                    ?
                    <div>Nothing to see here..</div>
                    :
                    <div>{row}</div>
                }
            </div>
        );

    }

}

export default SelectSeat;

// we need to build a seat map from rows and cols
// make a <Row columns="6"/>
// loop in the render(){ forEach numberOfRows (add a <Row columns="6"/>)  }
// show (un)available seats
// make available seats clickable