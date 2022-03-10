import { useState } from "react";
import { Outlet } from "react-router-dom";

import "./layout.css";
import Header from "../components/headers/Header";
import NavBar from "../components/navBar/NavBar";
import NavContext from "../components/navBar/NavContext";
import Footer from "../components/footer/Footer";

const Layout = () => {
    const [showNav, setShowNav] = useState(false);

    const handleToggleMenu = () => setShowNav(!showNav);
    return (
        <NavContext.Provider value={{ showNav, setShowNav }}>
            <Header onToggleMenu={handleToggleMenu} />
            <NavBar onCloseNav={handleToggleMenu} />
            <div className="layout">
                <Outlet />
            </div>
            <Footer />
        </NavContext.Provider>
    );
};

export default Layout;
