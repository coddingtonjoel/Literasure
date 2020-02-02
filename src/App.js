import React from "react";
import "./sass/main.scss";
import Header from "./components/Header";
import Hook from "./components/Hook";

function App() {
    return (
        <div className="complete-page">
            <Header />
            <main>
                <Hook />
            </main>
        </div>
    );
}

export default App;
