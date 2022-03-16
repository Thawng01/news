import { useState } from "react";
import { MdMenu, MdHome, MdSearch } from "react-icons/md";
import { Link } from "react-router-dom";

import "./header.css";
import HeaderMenuList from "./HeaderMenuList";
import HeaderSearch from "./HeaderSearch";

const Header = ({ onToggleMenu }) => {
    const [showSearch, setShowSearch] = useState(false);
    const [value, setValue] = useState("");

    const handleShowSearch = () => {
        setShowSearch(!showSearch);
        setValue("");
    };

    const handleChange = (e) => setValue(e.target.value);
    const handleClear = () => setValue("");

    return (
        <div className="header">
            <HeaderSearch
                onShowSearch={handleShowSearch}
                showSearch={showSearch}
                value={value}
                handleChange={handleChange}
                handleClear={handleClear}
            />

            <div
                style={{
                    opacity: showSearch ? 0 : 1,
                    visibility: showSearch ? "hidden" : "visible",
                }}
                className="header-item-container"
            >
                <div className="header-container">
                    <div className="menu" onClick={onToggleMenu}>
                        <MdMenu className="menu-icon" />
                    </div>

                    <Link to={"/"} className="home-link">
                        <MdHome className="home-icon" />
                    </Link>
                    <HeaderMenuList />
                </div>

                <div className="header-search" onClick={handleShowSearch}>
                    <MdSearch className="search-icon" />
                </div>
            </div>
        </div>
    );
};

export default Header;
