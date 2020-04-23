import React from "react";
import "./sass/main.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import routes from "./maps/routes";

function App() {
    const routeComponents = routes.map(({ path, component }, key) => (
        <Route exact path={path} component={component} key={key} />
    ));

    return (
        <Router>
            <div className="complete-page">
                <Navbar />
                <Switch>{routeComponents}</Switch>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
