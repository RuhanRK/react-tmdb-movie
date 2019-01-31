import { combineReducers } from "redux";
import home from "./homeReducers";
import movie from "./movieReducer";

// Set up both reducer with combine method
const rootReducer = combineReducers({
    home,
    movie
});

export default rootReducer;
