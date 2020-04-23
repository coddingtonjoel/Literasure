import React from "react";

const Features = () => {
    return (
        <div className="features">
            <div className="features__section">
                <i className="fas fa-cogs features__section--icon"></i>
                <p className="features__section--head">Machine Learning</p>
                <div className="features__section--label">
                    Our process uses advanced artificial intelligence to learn
                    your book preferences.
                </div>
            </div>
            <div className="features__section">
                <i className="fas fa-chart-pie features__section--icon"></i>
                <p className="features__section--head">Advanced Stats</p>
                <div className="features__section--label">
                    Literasure records your reading history and generates
                    advanced statistics.
                </div>
            </div>
            <div className="features__section">
                <i className="fas fa-percent features__section--icon"></i>
                <p className="features__section--head">Accuracy</p>
                <div className="features__section--label">
                    As your completion history grows, your recommendation
                    accuracy does too.
                </div>
            </div>
            <div className="features__section">
                <i className="fas fa-truck-loading features__section--icon"></i>
                <p className="features__section--head">Blind Delivery</p>
                <div className="features__section--label">
                    Option for blind delivery that doesn't reveal title, genre
                    or subject matter. Get surprised!
                </div>
            </div>
        </div>
    );
};

export default Features;
