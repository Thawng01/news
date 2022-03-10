import "./navCategory.css";
import NavListItem from "./NavListItem";
import useNavContext from "../../hook/useNavContext";
import { categories } from "../../data";

const NavCategory = () => {
    const { showNav } = useNavContext();

    setTimeout(() => {
        const listTag = document.getElementsByClassName("nav-category")[0];
        if (showNav) {
            listTag.classList.add("showList");
        } else {
            listTag.classList.remove("showList");
        }
    }, 200);

    return (
        <div className="nav-category">
            <h2 className="nav-category-title">Categories</h2>
            <ul className="nav-item-lists">
                {categories.map((item) => {
                    return <NavListItem key={item.id} name={item.name} />;
                })}
            </ul>
        </div>
    );
};

export default NavCategory;
