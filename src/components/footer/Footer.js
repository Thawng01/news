import React from "react";
import { IoLogoInstagram, IoLogoTwitter } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { ImYoutube2 } from "react-icons/im";

import "./footer.css";
import FooterCategory from "./FooterCategory";
import FooterContact from "./FooterContact";
import FooterCountry from "./FooterCountry";
import FooterSubscribe from "./FooterSubscribe";

const Footer = () => {
    return (
        <div className="footer">
            <div className="lian-menu-container">
                <div className="footer-menu">
                    <FooterCategory />
                    <FooterCountry />
                </div>

                <div className="footer-bottom">
                    <FooterContact />
                    <FooterSubscribe footer />
                </div>
            </div>

            <div className="social-icons">
                <span className="social-icon fa">
                    <FaFacebookF className="fb-icon" />
                </span>
                <span className="social-icon youtube">
                    <ImYoutube2 className="youtube-icon" />
                </span>

                <span className="social-icon instagram">
                    <IoLogoInstagram className="instagram-icon" />
                </span>
                <span className="social-icon twitter">
                    <IoLogoTwitter className="twitter-icon" />
                </span>
            </div>
        </div>
    );
};

export default Footer;
