import React from "react";
import "./sass/main.scss";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Hook from "./components/Hook";
import Features from "./components/Features";
import Images from "./components/Images";

function App() {
    return (
        <div className="complete-page">
            <Navbar />
            <Header />
            <main>
                <Hook />
                <Images />
                <Features />
            </main>
        </div>
    );
}

export default App;
