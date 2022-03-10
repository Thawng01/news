import React from "react";

import "./footerCategory.css";
import { categories } from "../../data";
import NavListItem from "../navBar/NavListItem";

const FooterCategory = () => {
    return (
        /* share styles with other footer component */
        <div className="footer-category">
            <h3 className="footer-category-title">CATEGORIES</h3>
            <ul className="footer-item-lists">
                {categories.map((item) => {
                    return <NavListItem key={item.id} name={item.name} />;
                })}
            </ul>
        </div>
    );
};

export default FooterCategory;
