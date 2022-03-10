import { NavLink } from "react-router-dom";

import "./headerMenuListLink.css";

const HeaderMenuListLink = ({ label }) => {
    return (
        <NavLink
            to={`category/${label.toLowerCase()}`}
            className="menu-list-label"
            style={({ isActive }) => {
                return {
                    backgroundColor: isActive ? "red" : "",
                };
            }}
        >
            {label}
        </NavLink>
    );
};

export default HeaderMenuListLink;
