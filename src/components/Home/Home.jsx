import React from "react";

import HeroImage from "../Pages/HeroImage/HeroImage";
import SearchBar from "../Pages/SearchBar/SearchBar";
import FourGrid from "../Pages/FourGrid/FourGrid";
import MovieThumbnail from "../Pages/MovieThumbnail/MovieThumbnail";

import { POSTER_SIZE, IMAGE_BASE_URL } from "../../configurations/config";
import Spinner from "../Pages/Spinner/Spinner";
import LoadMoreButton from "../Pages/LoadMoreButton/LoadMoreButton";

const Home = ({
    totalPages,
    searchTerm,
    searchMovies,
    movies,
    loading,
    loadMoreMovies,
    heroImage,
    currentPage
}) => {
    return (
        <React.Fragment>
            {/* First check heroImage available or not */}
            {heroImage && (
                <div>
                    <HeroImage heroImage={heroImage} />
                    <SearchBar searchTerms={searchMovies} />
                </div>
            )}
            <div>
                <FourGrid
                    header={searchTerm ? "Searched Movies" : "Popular Movies"}
                    loading={loading}
                >
                    {movies.map(movie => {
                        return (
                            <MovieThumbnail
                                key={movie.id}
                                clickable={true}
                                image={
                                    movie.poster_path
                                        ? `${IMAGE_BASE_URL}${POSTER_SIZE}${
                                              movie.poster_path
                                          }`
                                        : "./images/no_image.jpg"
                                }
                                movieId={movie.id}
                                movieName={movie.original_title}
                            />
                        );
                    })}
                </FourGrid>
                {/* check loading status and render Spinner */}
                {loading ? <Spinner /> : null}
                {/* render load more button depends on some cindition */}
                {currentPage <= totalPages && !loading ? (
                    <LoadMoreButton text="Load More" onClick={loadMoreMovies} />
                ) : null}
            </div>
        </React.Fragment>
    );
};

export default Home;
