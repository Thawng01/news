import { useRef, useState } from "react";
import { MdSearch, MdClear } from "react-icons/md";

import "./headerSearch.css";

const HeaderSearch = () => {
    const [showSearch, setShowSearch] = useState(false);
    const [value, setValue] = useState("");

    const ref = useRef();

    const onShowSearch = () => {
        setShowSearch(true);
        ref?.current?.focus();
    };

    const onHideSearch = () => {
        setShowSearch(false);
        setValue("");
    };
    const handleChange = (e) => setValue(e.target.value);

    const clearValue = () => setValue("");

    return (
        <div
            className="search-container"
            style={{ width: showSearch ? 400 : 0 }}
        >
            <input
                ref={ref}
                placeholder="Search..."
                style={{ padding: showSearch ? 7 : 0 }}
                className="search-input"
                onBlur={onHideSearch}
                value={value}
                onChange={handleChange}
            />
            {value.length > 0 && (
                <MdClear className="clear-icon" onClick={clearValue} />
            )}

            <div className="search" onClick={onShowSearch}>
                <MdSearch className="search-icon" />
            </div>
        </div>
    );
};

export default HeaderSearch;
