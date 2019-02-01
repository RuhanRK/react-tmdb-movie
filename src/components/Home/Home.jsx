import React from "react";
import HeroImage from "../Pages/HeroImage/HeroImage";
import SearchBar from "../Pages/SearchBar/SearchBar";

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
        </React.Fragment>
    );
};

export default Home;
