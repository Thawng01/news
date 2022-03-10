import useNavContext from "../../hook/useNavContext";
import "./navCountry.css";
import NavListItem from "./NavListItem";
import { countries } from "../../data";

const NavCountry = () => {
    const { showNav } = useNavContext();

    setTimeout(() => {
        const listTag = document.getElementsByClassName("nav-country")[0];
        if (showNav) {
            listTag.classList.add("showList");
        } else {
            listTag.classList.remove("showList");
        }
    }, 200);

    return (
        <div className="nav-country">
            <h2 className="nav-country-title">Countries</h2>
            <ul className="nav-country-ul">
                {countries.map((item) => {
                    return (
                        <NavListItem key={item.id} name={item.name} country />
                    );
                })}
            </ul>
        </div>
    );
};

export default NavCountry;
