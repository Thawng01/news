import { useEffect, useRef } from "react";
import { MdClear, MdArrowBack } from "react-icons/md";

import { useNavigate } from "react-router-dom";

import "./headerSearch.css";

const HeaderSearch = ({
    onShowSearch,
    showSearch,
    value,
    handleChange,
    handleClear,
}) => {
    const inputRef = useRef();
    const navigate = useNavigate();

    const handleSearch = () => {
        navigate(`/search/${value.toLowerCase()}`);
        onShowSearch();
    };

    useEffect(() => {
        if (showSearch) {
            inputRef?.current?.focus();
        }
    }, [showSearch]);

    return (
        <div
            className="search-container"
            style={{
                visibility: showSearch ? "visible" : "hidden",
                opacity: showSearch ? 1 : 0,
            }}
        >
            <MdArrowBack className="search-back-icon" onClick={onShowSearch} />
            <div className="header-search-center-item">
                <div className="header-search-input-container">
                    <input
                        ref={inputRef}
                        placeholder="Search..."
                        className="header-search-input"
                        value={value}
                        onChange={handleChange}
                    />
                    {value.length > 0 && (
                        <MdClear
                            className="header-search-clear-icon"
                            onClick={handleClear}
                        />
                    )}
                </div>

                <div className="header-search-btn" onClick={handleSearch}>
                    <span className="header-search-btn-label">Search</span>
                </div>
            </div>

            <MdClear className="search-close-icon" onClick={onShowSearch} />
        </div>
    );
};

export default HeaderSearch;
