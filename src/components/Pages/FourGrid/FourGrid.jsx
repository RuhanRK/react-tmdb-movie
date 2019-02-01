import React from "react";

import "./FourGrid.css";

const FourGrid = props => {
    const renderElements = () => {
        const gridElements = props.children.map((element, i) =>
            props(
                <div key={i} className="grid">
                    {element}
                </div>
            )
        );
        return gridElements;
    };
    return (
        <div className="rmdb-grid">
            {props.header && !props.loading ? <h1>{props.header}</h1> : null}
            <div className="four-col-grid">{renderElements()}</div>
        </div>
    );
};

export default FourGrid;
