import React from "react";
import { Link } from "react-router-dom";

import "./MovieThumbnail.css";

const MovieThumbnail = ({ image, movieId, movieName, clickable }) => {
    return (
        <React.Fragment>
            <div className="thumbnail">
                {clickable ? (
                    <Link to={{ pathname: `/${movieId}` }}>
                        <img src={image} alt={`${movieName} movie`} />
                    </Link>
                ) : (
                    <img src={image} alt={`${movieName} movie`} />
                )}
            </div>
        </React.Fragment>
    );
};

export default MovieThumbnail;
