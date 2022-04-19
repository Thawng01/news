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
    const navigate = useNavigate();

    const handleSearch = (e) => {
        if (e.key === "Enter") {
            navigate(`/search/${value.toLowerCase()}`);
            onShowSearch();
        }
    };

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
                        placeholder="Search..."
                        className="header-search-input"
                        value={value}
                        onChange={handleChange}
                        onKeyPress={(e) => handleSearch(e)}
                    />
                    {value.length > 0 && (
                        <MdClear
                            className="header-search-clear-icon"
                            onClick={handleClear}
                        />
                    )}
                </div>
            </div>

            <MdClear className="search-close-icon" onClick={onShowSearch} />
        </div>
    );
};

export default HeaderSearch;
