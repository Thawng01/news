import { IoLogoInstagram, IoLogoTwitter } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { ImYoutube2 } from "react-icons/im";

import "./footerSocialIcon.css";

const FooterSocialIcon = () => {
    return (
        <div className="footer-social-icon-container">
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

            <span className="footer-link">www.chinaw.com</span>
        </div>
    );
};

export default FooterSocialIcon;
