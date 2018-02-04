import React, { Component } from "react";

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = { input: "Enter here" };
    }

    render() {
        return (
            <div className="search-bar">
                <input
                    value={this.state.input}
                    onChange={(event) => this.setState({ input: event.target.value })} />
            </div>
        )
    }

    onInputChange(event) {
        console.log(event.target.value);
    }
}

export default SearchBar;