import { combineReducers } from "redux";
import home from "./homeReducer";
import movie from "./movieReducer";

// Set up both reducer with combine method
const rootReducer = combineReducers({
    home,
    movie
});

export default rootReducer;
