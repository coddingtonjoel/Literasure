import React, { Fragment } from "react";
import "./sass/main.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Hook from "./components/Hook";
import Features from "./components/Features";
import Images from "./components/Images";
import Pricing from "./components/Pricing";
import About from "./components/About";

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
                </Switch>
            </div>
        </Router>
    );
}

export default App;
