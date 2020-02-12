import React from "react";
import white_icon from "../images/LiterasureWhite.png";
import gold_icon from "../images/LiterasureGold.png";
import Button from "@material-ui/core/Button";

const Pricing = () => {
    return (
        <div className="pricing" id="pricing">
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
                            <i className="fas fa-check" />
                            Unlimited Book History
                        </p>
                        <p>
                            <i className="fas fa-check" />
                            Recommended & Discover Feeds
                        </p>
                        <p>
                            <i className="fas fa-check" />
                            Basic Statistics
                        </p>
                        <p>
                            <i className="fas fa-times" />
                            Blind Delivery
                        </p>
                        <p>
                            <i className="fas fa-times" />
                            Free Shipping
                        </p>
                        <p>
                            <i className="fas fa-times" />
                            Multiple Profiles
                        </p>
                        <p>
                            <i className="fas fa-times" />
                            Audible Subscription*
                        </p>
                    </div>
                    <Button
                        variant="contained"
                        style={styles}
                        className="pricing__button">
                        <span className="pricing__plan--select">
                            Select Plan
                        </span>
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
                            <i className="fas fa-check" />
                            Unlimited Book History
                        </p>
                        <p>
                            <i className="fas fa-check" />
                            Recommended & Discover Feeds
                        </p>
                        <p>
                            <i className="fas fa-check" />
                            Advanced Statistics
                        </p>
                        <p>
                            <i className="fas fa-check" />
                            Blind Delivery
                        </p>
                        <p>
                            <i className="fas fa-check" />
                            Free Shipping
                        </p>
                        <p>
                            <i className="fas fa-check" />
                            Multiple Profiles
                        </p>
                        <p>
                            <i className="fas fa-check" />
                            Audible Subscription*
                        </p>
                    </div>
                    <Button
                        variant="contained"
                        style={styles}
                        className="pricing__button">
                        <span className="pricing__plan--select">
                            Select Plan
                        </span>
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
    fontSize: "1.2rem",
    position: "absolute",
    height: "100%",
    background: "rgb(35, 35, 35)",
    color: "#caac28",
    transition: "0.3s"
};

export default Pricing;
