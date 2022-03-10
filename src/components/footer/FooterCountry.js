import React from "react";

import "./footerCountry.css";
import { countries } from "../../data";
import NavListItem from "../navBar/NavListItem";

const FooterCountry = () => {
    return (
        <div className="footer-category">
            <h3 className="footer-category-title">COUNTRIES</h3>
            <ul className="footer-item-lists">
                {countries.map((item) => {
                    return <NavListItem key={item.id} name={item.name} />;
                })}
            </ul>
        </div>
    );
};

export default FooterCountry;
