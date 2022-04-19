import { useRef } from "react";

import useNavContext from "../../hook/useNavContext";
import "./navCountry.css";
import NavListItem from "./NavListItem";
import { countries } from "../../data";

const NavCountry = () => {
    const { showNav } = useNavContext();

    const ref = useRef();

    setTimeout(() => {
        if (showNav) {
            ref?.current?.classList.add("showList");
        } else {
            ref?.current?.classList.remove("showList");
        }
    }, 200);

    return (
        <div ref={ref} className="nav-country">
            <h2 className="nav-country-title">Countries</h2>
            <ul className="nav-country-ul">
                {countries.map((item) => {
                    return <NavListItem key={item.id} item={item} country />;
                })}
            </ul>
        </div>
    );
};

export default NavCountry;
