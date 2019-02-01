import React, { Component } from "react";
import { connect } from "react-redux";

import Movie from "./../components/Movie/Movie";
import {
    showLoadingSpinner,
    clearMovie,
    getMovie,
    setMovieState
} from "./../actions";

class MovieContainer extends Component {
    componentDidMount() {
        const { movieId } = this.props.match.params;

        this.props.getMovie(movieId);
    }

    getMovie = movieId => {
        this.props.clearMovie();
        this.props.showLoadingSpinner();
        this.props.getMovie(movieId);
    };

    render() {
        return (
            <React.Fragment>
                <Movie
                    movie={this.props.movie}
                    directors={this.props.directors}
                    actors={this.props.actors}
                    loading={this.props.loading}
                />
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return state.movie;
};
const mapDispatchToProps = {
    getMovie,
    showLoadingSpinner,
    clearMovie,
    setMovieState
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MovieContainer);
