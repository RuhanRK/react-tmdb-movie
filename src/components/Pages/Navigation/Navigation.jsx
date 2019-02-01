import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import "./Navigation.css";

const Navigation = props => {
    return (
        <div className="navigation">
            <div className="navigation-content">
                <Link to="/">
                    <i className="fas fa-home fa-2x" />
                </Link>
                <p>/</p>
                <p>{props.movie}</p>
            </div>
        </div>
    );
};

Navigation.propTypes = {
    movie: PropTypes.string.isRequired
};

export default Navigation;
