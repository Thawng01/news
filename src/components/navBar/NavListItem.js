import { Link } from "react-router-dom";
import useNavContext from "../../hook/useNavContext";

import "./navListItem.css";

const NavListItem = ({ item, country, contact }) => {
    const { setShowNav } = useNavContext();

    const handleShowNav = () => setShowNav(false);

    let type = `category/${item.name.toLowerCase()}`;
    if (country) {
        type = `country/${item.code}`;
    } else if (contact) {
        type = `contact`;
    }

    return (
        <li className="nav-item-list">
            <Link to={type} onClick={handleShowNav} className="nav-name">
                {item.name}
            </Link>
        </li>
    );
};

export default NavListItem;
