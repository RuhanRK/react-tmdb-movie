import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import "./MovieThumbnail.css";

const MovieThumbnail = ({ image, movieId, movieName, clickable }) => {
    return (
        <React.Fragment>
            <div className="thumbnail">
                {clickable ? (
                    <Link to={`/movie/${movieId}`}>
                        <img src={image} alt={`${movieName} movie`} />
                    </Link>
                ) : (
                    <img src={image} alt={`${movieName} movie`} />
                )}
            </div>
        </React.Fragment>
    );
};

MovieThumbnail.propTypes = {
    image: PropTypes.string,
    movieId: PropTypes.number,
    movieName: PropTypes.string,
    clickable: PropTypes.bool
};

export default MovieThumbnail;
