import React, { Fragment } from "react";
import Button from "@material-ui/core/Button";
import original from "../images/original.png";
import wireframe from "../images/wireframe.png";
import wireframe2x from "../images/wireframe@2x.png";
import wireframehome from "../images/wireframehome.png";
import wireframehome2x from "../images/wireframehome@2x.png";
import highf from "../images/highf.png";
import highf2x from "../images/highf@2x.png";
import highfhome from "../images/highfhome.png";
import highfhome2x from "../images/highfhome@2x.png";

const About = (props) => {
    return (
        <Fragment>
            <div className="about__container">
                <h1 className="about__head">About Literasure</h1>
                <p className="about__body--main">
                    Literasure was designed by Joel Coddington, a computer
                    science student at Biola University in La Mirada, CA. This
                    website's concept is based off the idea of Goodreads, but
                    with more artificial intelligence and accuracy. The idea of
                    blind deliveries was inspired by Barnes and Noble's "Blind
                    Date with a Book" concept.
                </p>
                <p className="about__body--foot">
                    Literasure was created using React.js, Sass, and
                    Material-UI. User interface mockups were created with Adobe
                    XD.
                </p>
                <div className="about__github--container">
                    <Button
                        className="about__github--btn"
                        style={styles.button}
                        variant="contained">
                        <i className="fab fa-github"></i>
                        <a
                            className="about__github--link"
                            target="__blank"
                            rel="noopener noreferrer"
                            href="https://github.com/coddingtonjoel">
                            Joel's GitHub
                        </a>
                    </Button>
                </div>
            </div>
            <div className="about__mockup--container">
                <h1 className="about__head">Wireframes and Mockups</h1>
                <p className="about__body--main">
                    Proving that anything is possible with time and dedication!
                </p>
                <div className="about__modal--container">
                    <img className="about__image" src={original} alt="" />
                    <img className="about__image" src={wireframehome} alt="" />
                    <img className="about__image" src={wireframe} alt="" />
                    <img className="about__image" src={highfhome} alt="" />
                    <img className="about__image" src={highf} alt="" />
                </div>
            </div>
        </Fragment>
    );
};

const styles = {
    button: {
        fontFamily: "Raleway",
        fontWeight: "400",
        color: "rgb(51,51,51)",
        height: "3.5rem",
        fontSize: "1.2rem"
    }
};

export default About;
