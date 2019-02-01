import React from "react";
import "./Header.css";

const Header = () => {
    return (
        <header className="header">
            <div>
                <img
                    src="./images/reactMovie_logo.png"
                    alt=""
                    className="react-movie"
                />
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
