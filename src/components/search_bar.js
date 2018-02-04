import React, { Component } from "react";

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = { query: "" };
    }

    render() {
        return (
            <div className="search-bar">
                <input
                    value={this.state.query}
                    onChange={(event) => {
                        debugger;
                        this.onInputChange(event.target.value)}
                    } />
            </div>
        )
    }

    onInputChange(query) {
        debugger;
        this.setState({ query });
        this.props.onSearch(query);
    }
}

export default SearchBar;