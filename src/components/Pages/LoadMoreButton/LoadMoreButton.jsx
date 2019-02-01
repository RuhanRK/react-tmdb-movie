import React from "react";
import PropTypes from "prop-types";

import "./LoadMoreButton.css";

const LoadMoreButton = props => (
    <div className="button" onClick={props.onClick}>
        <button>{props.text}</button>
    </div>
);

LoadMoreButton.propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
};

export default LoadMoreButton;
