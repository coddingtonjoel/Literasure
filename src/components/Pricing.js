import React from "react";
import white_icon from "../images/LiterasureWhite.png";
import gold_icon from "../images/LiterasureGold.png";
import Button from "@material-ui/core/Button";

const Pricing = () => {
    return (
        <div className="pricing">
            <div className="pricing__flexbox">
                <div className="pricing__plan pricing__plan--basic">
                    <img
                        className="pricing__plan--icon"
                        src={white_icon}
                        alt=""
                    />
                    <h3 className="pricing__plan--title pricing__plan--title-basic">
                        BASIC
                    </h3>
                    <h3 className="pricing__plan--price-basic pricing__plan--price">
                        FREE
                    </h3>
                    <div className="pricing__plan--text">
                        <p>
                            <i class="fas fa-check" />
                            Unlimited Book History
                        </p>
                        <p>
                            <i class="fas fa-check" />
                            Recommended & Discover Feeds
                        </p>
                        <p>
                            <i class="fas fa-check" />
                            Basic Statistics
                        </p>
                        <p>
                            <i class="fas fa-times" />
                            Blind Delivery
                        </p>
                        <p>
                            <i class="fas fa-times" />
                            Free Shipping
                        </p>
                        <p>
                            <i class="fas fa-times" />
                            Multiple Profiles
                        </p>
                        <p>
                            <i class="fas fa-times" />
                            Audible Subscription*
                        </p>
                    </div>
                    <Button
                        variant="contained"
                        style={styles}
                        className="pricing__button">
                        GET STARTED
                    </Button>
                </div>
                <div className="pricing__plan pricing__plan--premium">
                    <img
                        className="pricing__plan--icon"
                        src={gold_icon}
                        alt=""
                    />
                    <h3 className="pricing__plan--title">PREMIUM</h3>
                    <h3 className="pricing__plan--price-premium pricing__plan--price">
                        $21.99 / mo.
                    </h3>
                    <div className="pricing__plan--text">
                        <p>
                            <i class="fas fa-check" />
                            Unlimited Book History
                        </p>
                        <p>
                            <i class="fas fa-check" />
                            Recommended & Discover Feeds
                        </p>
                        <p>
                            <i class="fas fa-check" />
                            Advanced Statistics
                        </p>
                        <p>
                            <i class="fas fa-check" />
                            Blind Delivery
                        </p>
                        <p>
                            <i class="fas fa-check" />
                            Free Shipping
                        </p>
                        <p>
                            <i class="fas fa-check" />
                            Multiple Profiles
                        </p>
                        <p>
                            <i class="fas fa-check" />
                            Audible Subscription*
                        </p>
                    </div>
                    <Button
                        variant="contained"
                        style={styles}
                        className="pricing__button">
                        GET STARTED
                    </Button>
                </div>
            </div>
        </div>
    );
};

const styles = {
    fontFamily: "Raleway",
    fontWeight: 400,
    backgroundColor: "#d9d9d9",
    fontSize: "1.2rem"
};

export default Pricing;
