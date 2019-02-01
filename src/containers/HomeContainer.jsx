import React, { Component } from "react";
import { connect } from "react-redux";

import Home from "./../components/Home/Home";

import {
    showLoadingSpinner,
    getPopularMovies,
    searchMovies,
    loadMoreMovies,
    clearMovies,
    setPopularState
} from "./../actions";

class HomeContainer extends Component {
    componentDidMount() {
        if (localStorage.getItem("HomeStorage")) {
            const home = JSON.parse(localStorage.getItem("HomeStorage"));
            this.props.setPopularState(home);
        } else {
            this.getMovies();
        }
    }

    componentDidUpdate() {
        // First check movies loaded or not
        if (this.props.movies.length > 0) {
            if (this.props.searchTerm === "") {
                localStorage.setItem("HomeStorage", JSON.stringify(this.props));
            }
        }
    }

    getMovies = () => {
        this.props.showLoadingSpinner();
        this.props.getPopularMovies();
    };

    searchMovies = searchTerm => {
        this.props.clearMovies();
        this.props.showLoadingSpinner();
        this.props.searchMovies(searchTerm);
    };

    loadMoreMovies = () => {
        const { searchTerm, currentPage } = this.props;

        this.props.showLoadingSpinner();
        this.props.loadMoreMovies(searchTerm, currentPage);
    };

    render() {
        return (
            <Home
                {...this.props}
                searchMovies={this.searchMovies}
                loadMoreMovies={this.loadMoreMovies}
            />
        );
    }
}

const mapStateToProps = state => {
    return state.home;
};

const mapDispatchToProps = {
    showLoadingSpinner,
    getPopularMovies,
    searchMovies,
    loadMoreMovies,
    clearMovies,
    setPopularState
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeContainer);
