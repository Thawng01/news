import "./headerMenuList.css";
import HeaderMenuListLink from "./HeaderMenuListLink";

const HeaderMenuList = () => {
    return (
        <ul className="header-menu-lists-container">
            <li className="header-menu-list-item health">
                <HeaderMenuListLink label="Health" />
            </li>

            <li className="header-menu-list-item business">
                <HeaderMenuListLink label="Business" />
            </li>

            <li className="header-menu-list-item technology">
                <HeaderMenuListLink label="Technology" />
            </li>

            <li className="header-menu-list-item science">
                <HeaderMenuListLink label="Science" />
            </li>

            <li className="header-menu-list-item general">
                <HeaderMenuListLink label="General" />
            </li>

            <li className="header-menu-list-item sport">
                <HeaderMenuListLink label="Sports" />
            </li>
            <li className="header-menu-list-item entertain">
                <HeaderMenuListLink label="Entertainment" />
            </li>
        </ul>
    );
};

export default HeaderMenuList;
