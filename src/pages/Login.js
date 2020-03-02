import React, { Fragment } from "react";
import Button from "@material-ui/core/Button";

const Login = () => {
    return (
        <Fragment>
            <div className="login__container">
                <div className="login__head--container">
                    <h1 className="login__head">Login to Literasure</h1>
                    <p className="login__head--sub">
                        Don't have an account?{" "}
                        <a className="login__head--sublink" href="/signup">
                            Sign up now.
                        </a>
                    </p>
                </div>
                <div className="login__form--container">
                    <form className="login__form" action="/user" method="get">
                        <input
                            className="login__form--email"
                            type="email"
                            placeholder="Email Address"
                            required
                        />
                        <input
                            className="login__form--password"
                            type="password"
                            placeholder="Password"
                            required
                        />
                        <Button type="submit" style={styles.btn}>
                            Login
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

export default Login;
