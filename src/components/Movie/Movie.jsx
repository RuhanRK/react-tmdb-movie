import React from "react";
import PropTypes from "prop-types";

import Spinner from "./../Pages/Spinner/Spinner";
import Navigation from "./../Pages/Navigation/Navigation";
import MovieInfo from "./../Pages/MovieInfo/MovieInfo";
import MovieInfoBar from "./../Pages/MovieInfoBar/MovieInfoBar";
import FourGrid from "./../Pages/FourGrid/FourGrid";
import Actor from "./../Pages/Actor/Actor";

const Movie = ({ movie, directors, actors, loading }) => {
    if (movie && directors && actors) {
        return (
            <React.Fragment>
                <Navigation movie={movie.title} />
                <MovieInfo movie={movie} directors={directors} />
                <MovieInfoBar
                    time={movie.runtime}
                    budget={movie.budget}
                    revenue={movie.revenue}
                />
                <FourGrid header="Actors">
                    {actors.map((actor, i) => (
                        <Actor key={i} actor={actor} />
                    ))}
                </FourGrid>
                {!actors && !loading ? <h1>No Movie Found</h1> : null}
            </React.Fragment>
        );
    } else {
        return <Spinner />;
    }
};

Movie.propTypes = {
    actors: PropTypes.array,
    directors: PropTypes.array,
    loading: PropTypes.bool,
    movie: PropTypes.object
};

export default Movie;
