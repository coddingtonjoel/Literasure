import React from "react";
import logo2x from "../images/LiterasureGoldFull.png";
import Button from "@material-ui/core/Button";

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar__content">
                <div className="navbar__content--logobox">
                    <a href={process.env.PUBLIC_URL + "/"}>
                        <img
                            src={logo2x}
                            alt=""
                            className="navbar__content--logo"
                        />
                    </a>
                </div>
                <div className="navbar__content--links">
                    <Button
                        style={styles}
                        href={process.env.PUBLIC_URL + "/about"}
                        className="navbar__content--link">
                        About
                    </Button>
                    <Button
                        style={styles}
                        href={process.env.PUBLIC_URL + "/#pricing"}
                        className="navbar__content--link">
                        Pricing
                    </Button>
                    <Button
                        style={styles}
                        href="#"
                        className="navbar__content--link">
                        Login
                    </Button>
                </div>
            </div>
        </div>
    );
};

const styles = {
    color: "transparent",
    fontSize: "1.3rem",
    fontFamily: "'Raleway', sans-serif",
    fontWeight: "400"
};

export default Navbar;
