import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./home.css";
import { fetchPopularNews } from "../stores/slices/popularSlice";
import PopularSlide from "../components/popular/PopularSlide";
import PopularList from "../components/popular/PopularList";
import RecentList from "../components/recent/RecentList";
import Error from "../components/Error";

const Home = () => {
    const [error, setError] = useState(null);

    const popular = useSelector((state) => state.popular.popular);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPopularNews());
    }, [dispatch]);

    useEffect(() => {
        if (popular?.status === "error") {
            setError(popular?.status);
        }
    }, [popular, setError]);

    if (error) {
        setTimeout(() => {
            setError(null);
        }, 3000);
    }

    return (
        <>
            <Error status={error} message={popular.message} />
            <div className="home">
                <div className="popular-container">
                    <PopularSlide articles={popular?.articles} />
                    <PopularList articles={popular?.articles} />
                </div>

                <RecentList />
            </div>
        </>
    );
};

export default Home;
