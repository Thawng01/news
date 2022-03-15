import React from "react";

import "./footerCountry.css";
import { countries } from "../../data";
import NavListItem from "../navBar/NavListItem";

const FooterCountry = () => {
    return (
        <div className="footer-category">
            <h4 className="footer-category-title">COUNTRIES</h4>
            <ul className="footer-item-lists">
                {countries.map((item) => {
                    return <NavListItem key={item.id} item={item} country />;
                })}
            </ul>
        </div>
    );
};

export default FooterCountry;
