import React from "react";
import PropTypes from "prop-types";

import { IMAGE_BASE_URL } from "./../../../configurations/config";

import "./Actor.css";

const Actor = ({ actor }) => {
    const POSTER_SIZE = "w154";
    return (
        <div className="actor">
            <img
                src={
                    actor.profile_path
                        ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
                        : "./images/no_image.jpg"
                }
                alt="actors thumb"
            />
            <div className="actor-details">
                <span className="actor-name">{actor.name}</span>
                <span className="actor-character">{actor.character}</span>
            </div>
        </div>
    );
};

Actor.propTypes = {
    actor: PropTypes.object.isRequired
};

export default Actor;
