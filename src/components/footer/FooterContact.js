import { about } from "../../data";
import NavListItem from "../navBar/NavListItem";

const FooterContact = () => {
    return (
        /* share styles with other footer component */
        <div className="footer-category footer-contact">
            <h3 className="footer-category-title">ABOUT</h3>
            <ul className="footer-item-lists">
                {about.map((item) => {
                    return <NavListItem key={item.id} name={item.name} />;
                })}
            </ul>
        </div>
    );
};

export default FooterContact;
