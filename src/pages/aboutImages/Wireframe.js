import React from "react";
import { Link } from "react-router-dom";
import wireframe from "../../images/wireframe.png";
import wireframe2x from "../../images/wireframe@2x.png";

const Wireframe = () => {
    return (
        <div className="aboutimg">
            <div className="aboutimg__container">
                <Link to="/about">
                    <i className="fas fa-arrow-left"></i>
                </Link>
                <img
                    className="aboutimg__img"
                    srcSet={`${wireframe} 1x, ${wireframe2x} 2x`}
                    alt=""
                />
            </div>
        </div>
    );
};

export default Wireframe;
