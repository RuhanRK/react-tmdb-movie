import React from "react";
import PropTypes from "prop-types";

import { IMAGE_BASE_URL, BACKDROP_SIZE } from "../../../configurations/config";

import "./HeroImage.css";

const HeroImage = props => {
    const { heroImage } = props;
    const image = `${IMAGE_BASE_URL}${BACKDROP_SIZE}${heroImage.backdrop_path}`;
    const title = heroImage.original_title;
    const text = heroImage.overview;
    return (
        <React.Fragment>
            <div
                className="heroImage"
                style={{
                    background: `linear-gradient(
                    to bottom,
                    rgba(0, 0, 0, 0) 59%,
                    rgba(0, 0, 0, 0) 41%,
                    rgba(0, 0, 0, 0.65) 100%
                ),
                url("${image}"), #c1c1c1`
                }}
            >
                <div className="heroImage-content">
                    <div className="heroImage__text">
                        <h1>{title}</h1>
                        <p>{text}</p>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

HeroImage.propTypes = {
    heroImage: PropTypes.object.isRequired
};

export default HeroImage;
