import React from "react";

import { IMAGE_BASE_URL } from "./../../../configurations/config";

import "./Actor.css";

const Actor = props => {
    const POSTER_SIZE = "w154";
    console.log(props.actor.character);
    return (
        <div className="actor">
            <img
                src={
                    props.actor.profile_path
                        ? `${IMAGE_BASE_URL}${POSTER_SIZE}${
                              props.actor.profile_path
                          }`
                        : "./images/no_image.jpg"
                }
                alt="actors thumb"
            />
            <div className="actor-details">
                <span className="actor-name">{props.actor.name}</span>
                <span className="actor-character">{props.actor.character}</span>
            </div>
        </div>
    );
};

export default Actor;
