import React, { useState } from "react";

import "./footerSubscribe.css";

const FooterSubscribe = ({ footer }) => {
    const [subscribed, setSubscribed] = useState(false);
    const [email, setEmail] = useState("");
    const [error, setError] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email) return setError("Please type your email!");
        setSubscribed(true);
    };

    const handleChange = (e) => {
        setError(null);
        setEmail(e.target.value);
    };

    return (
        <div className="footer-subscribe">
            <h3
                style={{ color: footer ? "#fff" : "#000" }}
                className="footer-subscribe-title"
            >
                SUBSCRIBE
            </h3>
            <p
                style={{ color: footer ? "#fff" : "#000" }}
                className="footer-subscribe-text"
            >
                Subscribe to stay up-to-date with updated news. You can
                unsubscribe at any time.
            </p>
            {subscribed ? (
                <span className="footer-subscription">
                    Thank you for subscription!
                </span>
            ) : (
                <form className="footer-subscribe-form" onSubmit={handleSubmit}>
                    {error && (
                        <span className="footer-subscribe-error">{error}</span>
                    )}
                    <input
                        style={{ backgroundColor: footer ? "#fff" : "#f1f1f1" }}
                        type="email"
                        value={email}
                        placeholder="Your email"
                        onChange={handleChange}
                    />
                    <button
                        type="submit"
                        className="footer-subscribe-submit-btn"
                    >
                        Subscribe
                    </button>
                </form>
            )}
        </div>
    );
};

export default FooterSubscribe;
