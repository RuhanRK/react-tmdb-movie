import React from "react";
import HeroImage from "../Pages/HeroImage/HeroImage";

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
            {heroImage && (
                <div>
                    <HeroImage heroImage={heroImage} />
                </div>
            )}
        </React.Fragment>
    );
};

export default Home;
