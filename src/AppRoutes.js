import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Category from "./pages/Category";
import Home from "./pages/Home";

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="/category/:name" element={<Category />} />
                    <Route path="/country/:name" element={<Category />} />
                </Route>
            </Routes>
        </Router>
    );
};

export default AppRoutes;
