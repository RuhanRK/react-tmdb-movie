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
        this.getMovies();
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
