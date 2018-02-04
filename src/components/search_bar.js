import React, { Component } from "react";

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = { input: "Enter here" };
    }

    render() {
        return (
            <div>
                <input
                    value={this.state.input}
                    onChange={(event) => this.setState({ input: event.target.value })} />
                You entered : {this.state.input}
            </div>
        )
    }

    onInputChange(event) {
        console.log(event.target.value);
    }
}

export default SearchBar;