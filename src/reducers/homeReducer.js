import * as actions from "./../actions/actionTypes";

const initialState = {
    movies: [],
    heroImage: null,
    loading: false,
    currentPage: 0,
    totalPages: 0,
    searchTerm: ""
};

const home = (state = initialState, action) => {
    switch (action.type) {
        case actions.SET_POPULAR_STATE:
            return {
                ...state,
                ...action.payload
            };
        case actions.GET_POPULER_MOVIES:
            return {
                ...state,
                movies: action.payload.results,
                heroImage: state.heroImage || action.payload.results[0],
                loading: false,
                currentPage: action.payload.page,
                totalPages: action.payload.total_pages,
                searchTerm: ""
            };
        case actions.LOAD_MORE_MOVIES:
            return {
                ...state,
                movies: [...state.movies, ...action.payload.results],
                loading: false,
                currentPage: action.payload.page,
                totalPages: action.payload.total_pages
            };
        case actions.SEARCH_MOVIES:
            return {
                ...state,
                movies: action.payload.results,
                loading: false,
                currentPage: action.payload.page,
                totalPages: action.payload.total_pages,
                searchTerm: action.payload.searchTerm
            };
        case actions.CLEAR_MOVIES:
            return {
                ...state,
                movies: []
            };
        case actions.SHOW_LOADING_SPINNER:
            return {
                ...state,
                loading: true
            };
        default:
            return state;
    }
};

export default home;
