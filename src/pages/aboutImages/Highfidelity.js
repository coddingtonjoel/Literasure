import React from "react";
import { Link } from "react-router-dom";
import highf from "../../images/highf.png";
import highf2x from "../../images/highf@2x.png";

const Highfidelity = () => {
    return (
        <div className="aboutimg">
            <div className="aboutimg__container">
                <Link to="/about">
                    <i className="fas fa-arrow-left"></i>
                </Link>
                <img
                    className="aboutimg__img"
                    srcSet={`${highf} 1x, ${highf2x} 2x`}
                    alt=""
                />
            </div>
        </div>
    );
};

export default Highfidelity;
