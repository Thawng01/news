import { Link } from "react-router-dom";
import useNavContext from "../../hook/useNavContext";

import "./navListItem.css";

const NavListItem = ({ name, country }) => {
    const { setShowNav } = useNavContext();

    const handleShowNav = () => setShowNav(false);

    let type = "category";
    if (country) {
        type = "country";
    }

    return (
        <li className="nav-item-list">
            <Link
                to={`/${type}/${name.toLowerCase()}`}
                onClick={handleShowNav}
                className="nav-name"
            >
                {name}
            </Link>
        </li>
    );
};

export default NavListItem;
