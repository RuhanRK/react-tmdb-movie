import React from "react";
import { Link } from "react-router-dom";

import "./Header.css";

const Header = () => {
    return (
        <header className="header">
            <div>
                <Link to="/">
                    <img
                        src="./images/reactMovie_logo.png"
                        alt=""
                        className="react-movie"
                    />
                </Link>
            </div>
            <div>
                <img
                    src="./images/the_mdb_logo.png"
                    alt=""
                    className="rmdb-tmdb-logo"
                />
            </div>
        </header>
    );
};

export default Header;
