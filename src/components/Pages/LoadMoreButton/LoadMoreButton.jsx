import React from "react";

import "./LoadMoreButton.css";

const LoadMoreButton = props => (
    <div className="button" onClick={props.onClick}>
        <button>{props.text}</button>
    </div>
);

export default LoadMoreButton;
