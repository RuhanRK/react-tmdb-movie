import React from "react";
import { Link } from "react-router-dom";

import "./NotFound.css";

const NotFound = () => {
    return (
        <div className="not-found">
            <h1>Sorry!! Your Query Isn't Found</h1>
            <h3>
                Go Back to <Link to="/">Home</Link>{" "}
            </h3>
        </div>
    );
};

export default NotFound;
