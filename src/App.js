import React, { Fragment } from "react";
import "./sass/main.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Hook from "./components/Hook";
import Features from "./components/Features";
import Images from "./components/Images";
import Pricing from "./components/Pricing";
import About from "./components/About";
import Footer from "./components/Footer";
import original from "./images/original.png";
import wireframe from "./images/wireframe.png";
import wireframe2x from "./images/wireframe@2x.png";
import wireframehome from "./images/wireframehome.png";
import wireframehome2x from "./images/wireframehome@2x.png";
import highf from "./images/highf.png";
import highf2x from "./images/highf@2x.png";
import highfhome from "./images/highfhome.png";
import highfhome2x from "./images/highfhome@2x.png";

function App() {
    return (
        <Router>
            <div className="complete-page">
                <Navbar />
                <Switch>
                    <Route
                        exact
                        path={process.env.PUBLIC_URL + "/"}
                        render={(props) => (
                            <Fragment>
                                <Header />
                                <main>
                                    <Hook />
                                    <Images />
                                    <Features />
                                    <Pricing />
                                </main>
                            </Fragment>
                        )}
                    />
                    <Route
                        exact
                        path={process.env.PUBLIC_URL + "/about"}
                        render={About}
                    />
                    <Route
                        exact
                        path={process.env.PUBLIC_URL + "/about/img/wireframe"}
                        render={(props) => (
                            <div className="aboutimg">
                                <div className="aboutimg__container">
                                    <Link to="/about">
                                        <i className="fas fa-arrow-left"></i>
                                    </Link>
                                    <img
                                        className="aboutimg__img"
                                        srcSet={`${wireframe} 1x, ${wireframe2x} 2x`}
                                        alt=""
                                    />
                                </div>
                            </div>
                        )}
                    />
                    <Route
                        exact
                        path={
                            process.env.PUBLIC_URL + "/about/img/wireframehome"
                        }
                        render={(props) => (
                            <div className="aboutimg">
                                <div className="aboutimg__container">
                                    <Link to="/about">
                                        <i className="fas fa-arrow-left"></i>
                                    </Link>
                                    <img
                                        className="aboutimg__img"
                                        srcSet={`${wireframehome} 1x, ${wireframehome2x} 2x`}
                                        alt=""
                                    />
                                </div>
                            </div>
                        )}
                    />
                    <Route
                        exact
                        path={
                            process.env.PUBLIC_URL + "/about/img/highfidelity"
                        }
                        render={(props) => (
                            <div className="aboutimg">
                                <div className="aboutimg__container">
                                    <Link to="/about">
                                        <i className="fas fa-arrow-left"></i>
                                    </Link>
                                    <img
                                        className="aboutimg__img"
                                        srcSet={`${highf} 1x, ${highf2x} 2x`}
                                        alt=""
                                    />
                                </div>
                            </div>
                        )}
                    />
                    <Route
                        exact
                        path={
                            process.env.PUBLIC_URL +
                            "/about/img/highfidelityhome"
                        }
                        render={(props) => (
                            <div className="aboutimg">
                                <div className="aboutimg__container">
                                    <Link to="/about">
                                        <i className="fas fa-arrow-left"></i>
                                    </Link>
                                    <img
                                        className="aboutimg__img"
                                        srcSet={`${highfhome} 1x, ${highfhome2x} 2x`}
                                        alt=""
                                    />
                                </div>
                            </div>
                        )}
                    />
                    <Route
                        exact
                        path={process.env.PUBLIC_URL + "/about/img/original"}
                        render={(props) => (
                            <div className="aboutimg">
                                <div className="aboutimg__container">
                                    <Link to="/about">
                                        <i className="fas fa-arrow-left"></i>
                                    </Link>
                                    <img
                                        className="aboutimg__img"
                                        src={original}
                                        alt=""
                                    />
                                </div>
                            </div>
                        )}
                    />
                </Switch>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
