import React from "react";
import { Link } from "react-router-dom";
import wireframehome from "../../images/wireframehome.png";
import wireframehome2x from "../../images/wireframehome@2x.png";

const WireframeHome = () => {
    return (
        <div className="aboutimg">
            <div className="aboutimg__container">
                <Link to="/about">
                    <i className="fas fa-arrow-left"></i>
                </Link>
                <img
                    className="aboutimg__img"
                    srcSet={`${wireframehome} 1x, ${wireframehome2x} 2x`}
                    alt=""
                />
            </div>
        </div>
    );
};

export default WireframeHome;
