import React from "react";

import HeroImage from "../Pages/HeroImage/HeroImage";
import SearchBar from "../Pages/SearchBar/SearchBar";
import FourGrid from "../Pages/FourGrid/FourGrid";
import MovieThumbnail from "../Pages/MovieThumbnail/MovieThumbnail";

import { POSTER_SIZE, IMAGE_BASE_URL } from "../../configurations/config";

const Home = props => {
    const {
        totalPages,
        searchTerm,
        searchMovies,
        movies,
        loading,
        loadMoreMovies,
        heroImage,
        currentPage
    } = props;
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
                    {movies.map((movie, i) => {
                        return (
                            <MovieThumbnail
                                key={i}
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
            </div>
        </React.Fragment>
    );
};

export default Home;
