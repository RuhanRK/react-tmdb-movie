import { API_KEY, API_URL } from "./../configurations/config";
import * as actions from "./actionTypes";
import { fetchMovies } from "./../configurations/helper";

// Action for both-->
export const showLoadingSpinner = () => {
    return {
        type: actions.SHOW_LOADING_SPINNER,
        payload: null
    };
};

// Actions for Home-->
export const getPopularMovies = () => {
    const endPoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`; //Initially render details from first page
    const results = fetchMovies(endPoint);

    return {
        type: actions.GET_POPULER_MOVIES,
        payload: results
    };
};

export const searchMovies = searchTerm => {
    let endPoint;
    // If user delete search term from search bar then back to popular movie data
    if (!searchTerm) {
        endPoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
    } else {
        endPoint = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${searchTerm}`;
    }

    const results = fetchMovies(endPoint, res => {
        return { ...res, searchTerm };
    });

    return {
        type: actions.SEARCH_MOVIES,
        payload: results
    };
};

export const loadMoreMovies = (searchTerm, currentPage) => {
    let endPoint;

    // if user don't search anything and want more movies
    if (searchTerm === "") {
        endPoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=${currentPage +
            1}`;
    }
    // if user search with search term
    else {
        endPoint = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${searchTerm}&page=${currentPage +
            1}`;
    }

    const results = fetchMovies(endPoint);

    return {
        type: actions.LOAD_MORE_MOVIES,
        payload: results
    };
};

export const clearMovies = () => {
    return {
        type: actions.CLEAR_MOVIES,
        payload: null
    };
};

export const setPopularState = state => {
    return {
        type: actions.SET_POPULAR_STATE,
        payload: state
    };
};

// FOR MOVIE-->

export const clearMovie = () => {
    return {
        type: actions.CLEAR_MOVIE,
        payload: null
    };
};

export const getMovie = movieId => {
    let endpoint = `${API_URL}movie/${movieId}?api_key=${API_KEY}&language=en-US`;
    let newState = {};

    const request = fetchMovies(endpoint, result => {
        if (result.status_code) {
            // If we don't find any movie
            return newState;
        } else {
            newState = { movie: result };
            endpoint = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`;

            return fetchMovies(endpoint, result => {
                const directors = result.crew.filter(
                    member => member.job === "Director"
                );
                newState.actors = result.cast;
                newState.directors = directors;

                return newState;
            });
        }
    }).catch(error => console.error("Error:", error));

    return {
        type: actions.GET_MOVIE,
        payload: request
    };
};

export const setMovieState = state => {
    return {
        type: actions.SET_MOVIE_STATE,
        payload: state
    };
};
