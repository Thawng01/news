import { MdClear } from "react-icons/md";
import useNavContext from "../../hook/useNavContext";

import "./navBar.css";
import NavCategory from "./NavCategory";
import NavCountry from "./NavCountry";

const NavBar = ({ onCloseNav }) => {
    const { showNav } = useNavContext();
    return (
        <div
            className="nav-bar"
            style={{
                opacity: showNav ? 1 : 0,
                visibility: showNav ? "visible" : "hidden",
            }}
        >
            <div className="nav-close" onClick={onCloseNav}>
                <MdClear className="nav-close-icon" />
            </div>

            <div className="nav-item-list-container">
                <NavCategory />
                <NavCountry />
            </div>
        </div>
    );
};

export default NavBar;
