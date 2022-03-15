import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Category from "./pages/Category";
import Contact from "./pages/Contact";
import Country from "./pages/Country";
import Detail from "./pages/Detail";
import Home from "./pages/Home";
import Search from "./pages/Search";

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="/category/:name" element={<Category />} />
                    <Route path="/country/:name" element={<Country />} />
                    <Route path="detail/:title" element={<Detail />} />
                    <Route path="search/:name" element={<Search />} />
                    <Route path="contact" element={<Contact />} />
                </Route>
            </Routes>
        </Router>
    );
};

export default AppRoutes;
