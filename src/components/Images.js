import React from "react";
import crop_one1x from "../images/Mockup/crop1.png";
import crop_two1x from "../images/Mockup/crop2.png";
import crop_one2x from "../images/Mockup/crop1@2x.png";
import crop_two2x from "../images/Mockup/crop2@2x.png";
import cropsm1_1x from "../images/Mockup/cropSm1@1x.png";
import cropsm1_2x from "../images/Mockup/cropSm1@2x.png";
import cropsm2_1x from "../images/Mockup/cropSm2@1x.png";
import cropsm2_2x from "../images/Mockup/cropSm2@2x.png";

const Images = () => {
    return (
        <div className="images">
            <picture>
                <source
                    srcset={`${cropsm2_1x} 1x, ${cropsm2_2x} 2x`}
                    media="(max-width: 680px)"
                />
                <img
                    className="images__croptwo"
                    srcset={`${crop_two1x} 1x, ${crop_two2x} 2x`}
                    alt=""
                />
            </picture>
            <picture>
                <source
                    srcset={`${cropsm1_1x} 1x, ${cropsm1_2x} 2x`}
                    media="(max-width: 680px)"
                />
                <img
                    className="images__cropone"
                    srcset={`${crop_one1x} 1x, ${crop_one2x} 2x`}
                    alt=""
                />
            </picture>
        </div>
    );
};

export default Images;
