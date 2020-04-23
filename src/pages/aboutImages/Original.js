import React from "react";
import { Link } from "react-router-dom";
import original from "../../images/original.png";

const Original = () => {
    return (
        <div className="aboutimg">
            <div className="aboutimg__container">
                <Link to="/about">
                    <i className="fas fa-arrow-left"></i>
                </Link>
                <img className="aboutimg__img" src={original} alt="" />
            </div>
        </div>
    );
};

export default Original;
