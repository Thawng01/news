import "./navCategory.css";
import NavListItem from "./NavListItem";
import useNavContext from "../../hook/useNavContext";
import { categories } from "../../data";
import { useRef } from "react";

const NavCategory = () => {
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
        <div ref={ref} className="nav-category">
            <h2 className="nav-category-title">Categories</h2>
            <ul className="nav-item-lists">
                {categories.map((item) => {
                    return <NavListItem key={item.id} item={item} />;
                })}
            </ul>
        </div>
    );
};

export default NavCategory;
