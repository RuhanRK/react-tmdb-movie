import React from "react";
import PropTypes from "prop-types";

import {
    IMAGE_BASE_URL,
    BACKDROP_SIZE,
    POSTER_SIZE
} from "./../../../configurations/config";
import MovieThumbnail from "./../MovieThumbnail/MovieThumbnail";

import "./MovieInfo.css";

const MovieInfo = props => {
    const { movie, directors } = props;

    return (
        <div
            className="movie-info"
            style={{
                background: movie.backdrop_path
                    ? `url('${IMAGE_BASE_URL}${BACKDROP_SIZE}${
                          movie.backdrop_path
                      }')`
                    : "#000"
            }}
        >
            <div className="movie-info-details">
                <div className="movie-info-thumb">
                    <MovieThumbnail
                        clickable={false}
                        image={
                            movie.poster_path
                                ? `${IMAGE_BASE_URL}${POSTER_SIZE}${
                                      movie.poster_path
                                  }`
                                : "./images/no_image.jpg"
                        }
                    />
                </div>
                <div className="movie-info-text">
                    <h1>{movie.title}</h1>
                    <h3>PLOT</h3>
                    <p>{movie.overview}</p>
                    <div className="movie-info-rating">
                        <h3>MOVIE RATING</h3>
                        <meter
                            min="0"
                            low="40"
                            high="90"
                            max="100"
                            value={movie.vote_average * 10}
                        />
                        <p className="movie-info-score">{movie.vote_average}</p>
                    </div>
                    <div className="director">
                        {directors.length > 1 ? (
                            <h3>DIRECTORS</h3>
                        ) : (
                            <h3>DIRECTOR</h3>
                        )}
                        {directors.map(director => (
                            <p
                                key={director.credit_id}
                                className="rmdb-director"
                            >
                                {director.name}
                            </p>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

MovieInfo.propTyps = {
    movie: PropTypes.object.isRequired,
    directors: PropTypes.array.isRequired
};

export default MovieInfo;
