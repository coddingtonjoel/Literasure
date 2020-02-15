import React from "react";

import Button from "@material-ui/core/Button";

const Header = () => {
    return (
        <header className="header">
            <div className="header__text-box">
                <h1 className="header__title">
                    <span className="header__title--main">Literasure</span>
                    <span className="header__title--sub">
                        Recommends the books you{" "}
                        <span className="header__title--sub-actually">
                            actually
                        </span>{" "}
                        want to read.
                    </span>
                    <Button
                        style={styles.btn}
                        className="header__btn header__btn--signup"
                        href="#">
                        Sign Up
                    </Button>
                    <Button
                        style={styles.btn}
                        className="header__btn header__btn--login"
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
        fontWeight: 400,
        margin: "1rem 1rem"
    }
};

export default Header;
