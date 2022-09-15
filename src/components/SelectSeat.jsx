
import React from "react";

class SelectSeat extends React.Component {
    state = {
        flight: {},    // stores API results
        loading: true,  // check if we are ready to show results
        error: null     // any errors?
    }

componentDidMount(){

}

    render(){

        return (
            <div>
                <h2>Select Seat</h2>
            </div>
        );

    }

}

export default SelectSeat;