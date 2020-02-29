import React, { Fragment } from "react";
import Header from "../components/Header";
import Hook from "../components/Hook";
import Features from "../components/Features";
import Images from "../components/Images";
import Pricing from "../components/Pricing";

const Home = () => {
    return (
        <Fragment>
            <Header />
            <main>
                <Hook />
                <Images />
                <Features />
                <Pricing />
            </main>
        </Fragment>
    );
};

export default Home;
