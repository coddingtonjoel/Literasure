import React from "react";
import "./Header.css";
import logo2x from "../../images/Literasure@2x.png";
import Button from "@material-ui/core/Button";

const Header = () => {
    return (
        <header className="header">
            <div className="logo-box">
                <img src={logo2x} alt="" className="logo" />
            </div>
            <div className="page-head-container">
                <h1 className="page-head">
                    <span className="page-head-main">Literasure</span>
                    <span className="page-head-sub">
                        Recommends the books you{" "}
                        <span className="page-head-actually">actually</span>{" "}
                        want to read.
                    </span>
                    <Button
                        style={styles.btn}
                        className="btn btn-signup"
                        href="#">
                        Sign Up
                    </Button>
                    <Button
                        style={styles.btn}
                        className="btn btn-login"
                        href="#">
                        Login
                    </Button>
                </h1>
            </div>
        </header>
    );
};

const styles = {
    btn: {
        fontFamily: "Raleway",
        fontWeight: 400
    }
};

export default Header;
