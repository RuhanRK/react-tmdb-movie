import React from "react";

import { calcTime, convertMoney } from "./../../../configurations/helper";

import "./MovieInfoBar.css";

const MovieInfoBar = props => {
    const { time, budget, revenue } = props;
    return (
        <div class="movieinfo-bar">
            <div class="movieinfo-bar-content">
                <div class="movieinfo-bar-content__col">
                    <i class="fas fa-clock fa-2x" />
                    <span class="movieinfo-bar-content__info">
                        Running Time: {calcTime(time)}
                    </span>
                </div>
                <div class="movieinfo-bar-content__col">
                    <i class="fas fa-money-check-alt fa-2x" />
                    <span class="movieinfo-bar-content__info">
                        Budget: {convertMoney(budget)}
                    </span>
                </div>
                <div class="movieinfo-bar-content__col">
                    <i class="fas fa-ticket-alt fa-2x" />
                    <span class="movieinfo-bar-content__info">
                        Revenue: {convertMoney(revenue)}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default MovieInfoBar;
