import React from "react";
import crop_one from "../images/Mockup/crop1.png";
import crop_two from "../images/Mockup/crop2.png";

const Images = () => {
    return (
        <div className="images">
            <img className="images__croptwo" src={crop_two} alt="" />
            <img className="images__cropone" src={crop_one} alt="" />
        </div>
    );
};

export default Images;
