import { MdMenu, MdHome } from "react-icons/md";
import { Link } from "react-router-dom";

import "./header.css";
import HeaderMenuList from "./HeaderMenuList";
import HeaderSearch from "./HeaderSearch";

const Header = ({ onToggleMenu }) => {
    return (
        <div className="header">
            <div className="header-container">
                <div className="menu" onClick={onToggleMenu}>
                    <MdMenu className="menu-icon" />
                </div>

                <Link to={"/"} className="home-link">
                    <MdHome className="home-icon" />
                </Link>
                <HeaderMenuList />
            </div>
            <HeaderSearch />
        </div>
    );
};

export default Header;
