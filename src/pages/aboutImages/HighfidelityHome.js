import React from "react";
import { Link } from "react-router-dom";
import highfhome from "../../images/highfhome.png";
import highfhome2x from "../../images/highfhome@2x.png";

const HighfidelityHome = () => {
    return (
        <div className="aboutimg">
            <div className="aboutimg__container">
                <Link to="/about">
                    <i className="fas fa-arrow-left"></i>
                </Link>
                <img
                    className="aboutimg__img"
                    srcSet={`${highfhome} 1x, ${highfhome2x} 2x`}
                    alt=""
                />
            </div>
        </div>
    );
};

export default HighfidelityHome;
