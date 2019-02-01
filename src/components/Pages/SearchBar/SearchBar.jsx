import React, { Component } from "react";
import PropTypes from "prop-types";

import "./SearchBar.css";
export default class SearchBar extends Component {
    state = {
        value: ""
    };

    timeout = null;

    doSearch = e => {
        this.setState({
            value: e.target.value
        });

        // clear after 500 ms
        clearTimeout(this.timeout);

        // wait 500 ms for setting search value
        this.timeout = setTimeout(() => {
            this.props.searchTerms(this.state.value);
        }, 500);
    };
    render() {
        return (
            <div className="search-bar">
                <div className="search-bar--content">
                    <label htmlFor="search">
                        <i className="fas fa-search fa-2x search-bar--content__icon" />
                    </label>
                    <input
                        type="text"
                        className="search-bar--content__input"
                        placeholder="Search"
                        id="search"
                        value={this.state.value}
                        onChange={this.doSearch}
                    />
                </div>
            </div>
        );
    }
}

SearchBar.popTypes = {
    searchTerms: PropTypes.func.isRequired
};
