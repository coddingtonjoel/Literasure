import React from "react";
import logo2x from "../images/LiterasureGoldFull.png";
import logoSm from "../images/LiterasureGold.png";
import Button from "@material-ui/core/Button";

const Navbar = () => {
    return (
        <div className="navbar__content">
            <div className="navbar__content--logobox">
                <a href={process.env.PUBLIC_URL + "/"}>
                    <img
                        src={logo2x}
                        alt=""
                        className="navbar__content--logo"
                    />
                    <img
                        src={logoSm}
                        alt=""
                        className="navbar__content--logoSm"
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
    );
};

const styles = {
    fontSize: "1.3rem",
    fontFamily: "'Raleway', sans-serif",
    fontWeight: "400",
    zIndex: "1"
};

export default Navbar;
