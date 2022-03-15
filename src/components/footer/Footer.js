import React from "react";

import "./footer.css";
import FooterCategory from "./FooterCategory";
import FooterContact from "./FooterContact";
import FooterCountry from "./FooterCountry";
import FooterSocialIcon from "./FooterSocialIcon";
import FooterSubscribe from "./FooterSubscribe";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-menu-container">
                <div className="footer-menu">
                    <FooterCategory />
                    <FooterCountry />
                </div>

                <div className="footer-bottom">
                    <FooterContact />
                    <FooterSubscribe footer />
                </div>
            </div>
            <FooterSocialIcon />
        </div>
    );
};

export default Footer;
