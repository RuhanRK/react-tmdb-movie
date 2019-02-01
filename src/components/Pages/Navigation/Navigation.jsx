import React from "react";
import { Link } from "react-router-dom";

import "./Navigation.css";

const Navigation = props => {
    return (
        <div class="navigation">
            <div class="navigation-content">
                <Link to="/">
                    <i class="fas fa-home fa-2x" />
                </Link>
                <p>/</p>
                <p>{props.movie}</p>
            </div>
        </div>
    );
};

export default Navigation;
