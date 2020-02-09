import React from "react";
import Button from "@material-ui/core/Button";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__company">
                <p className="footer__company--brand">Literasure</p>
                <p className="footer__company--sub">©Paperback Inc. 2020</p>
            </div>
            <div style={styles.div}>
                <Button
                    href={process.env.PUBLIC_URL + "/about"}
                    style={styles.btn}>
                    About
                </Button>
                <Button style={styles.btn}>Contact</Button>
                <Button style={styles.btn}>Terms & Conditions</Button>
            </div>
            <div className="footer__social" style={styles.div}>
                <Button
                    href="https://www.facebook.com"
                    target="__blank"
                    rel="noopener noreferrer"
                    style={styles.social}>
                    <i className="fab fa-facebook-f"></i>
                </Button>
                <Button
                    href="https://www.instagram.com"
                    target="__blank"
                    rel="noopener noreferrer"
                    style={styles.social}>
                    <i className="fab fa-instagram"></i>
                </Button>
                <Button
                    href="https://www.twitter.com"
                    target="__blank"
                    rel="noopener noreferrer"
                    style={styles.social}>
                    <i className="fab fa-twitter"></i>
                </Button>
            </div>
            <div className="footer__address">
                <p>325 Yucca Valley Rd. Palm Springs, CA 95271</p>
                <p>(382)-5839-2952</p>
                <p>info@literasure.com</p>
            </div>
        </footer>
    );
};

//edited directly to override Material-UI defaults
const styles = {
    btn: {
        color: "white",
        fontWeight: 400,
        fontSize: "1rem",
        margin: "0 1rem"
    },
    div: {
        alignSelf: "center",
        flex: "0 0 35rem"
    },
    social: {
        fontSize: "1.5rem",
        color: "white",
        width: "3rem",
        height: "3rem"
    }
};

export default Footer;
