import React, { Fragment } from "react";
import Button from "@material-ui/core/Button";

const Signup = () => {
    return (
        <Fragment>
            <div className="signup__container">
                <div className="signup__head--container">
                    <h1 className="signup__head">Sign Up for Literasure</h1>
                    <p className="signup__head--subgold">
                        Starting finding the books you love.
                    </p>
                    <p className="signup__head--sub">
                        Already have an account?{" "}
                        <a className="signup__head--sublink" href="/login">
                            Go to Login.
                        </a>
                    </p>
                </div>
                <div className="signup__form--container">
                    <form className="signup__form" action="/user" method="get">
                        <input
                            className="signup__form--email"
                            type="email"
                            placeholder="Email Address"
                            required
                        />
                        <input
                            className="signup__form--password"
                            type="password"
                            placeholder="Password"
                            required
                        />
                        <Button type="submit" style={styles.btn}>
                            Sign Up
                        </Button>
                    </form>
                </div>
            </div>
        </Fragment>
    );
};

const styles = {
    btn: {
        fontFamily: "Raleway",
        fontWeight: "400",
        height: "4rem",
        background: "rgb(20, 20, 20)",
        borderRadius: "12px",
        color: "white",
        letterSpacing: "2px",
        fontSize: "1.3rem",
        width: "15rem"
    }
};

export default Signup;
