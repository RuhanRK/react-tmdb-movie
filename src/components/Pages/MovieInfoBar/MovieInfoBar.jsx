import React from "react";
import PropTypes from "prop-types";

import { calcTime, convertMoney } from "./../../../configurations/helper";

import "./MovieInfoBar.css";

const MovieInfoBar = props => {
    const { time, budget, revenue } = props;

    return (
        <div className="movieinfo-bar">
            <div className="movieinfo-bar-content">
                <div className="movieinfo-bar-content__col">
                    <i className="fas fa-clock fa-2x" />
                    <span className="movieinfo-bar-content__info">
                        Running Time: {calcTime(time)}
                    </span>
                </div>
                <div className="movieinfo-bar-content__col">
                    <i className="fas fa-money-check-alt fa-2x" />
                    <span className="movieinfo-bar-content__info">
                        Budget: {convertMoney(budget)}
                    </span>
                </div>
                <div className="movieinfo-bar-content__col">
                    <i className="fas fa-ticket-alt fa-2x" />
                    <span className="movieinfo-bar-content__info">
                        Revenue: {convertMoney(revenue)}
                    </span>
                </div>
            </div>
        </div>
    );
};

MovieInfoBar.propTypes = {
    time: PropTypes.number.isRequired,
    budget: PropTypes.number.isRequired,
    revenue: PropTypes.number.isRequired
};

export default MovieInfoBar;
