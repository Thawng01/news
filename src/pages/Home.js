import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./home.css";
import {
    fetchPopularNews,
    selectedError,
    selectedLoading,
    selectedPopularNews,
} from "../stores/slices/popularSlice";
import PopularSlide from "../components/popular/PopularSlide";
import PopularList from "../components/popular/PopularList";
import RecentList from "../components/recent/RecentList";
import Error from "../components/Error";
import Loading from "../components/Loading";

const Home = () => {
    const [refresh, setRefresh] = useState(false);

    const loading = useSelector(selectedLoading);
    const error = useSelector(selectedError);
    const popular = useSelector(selectedPopularNews);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPopularNews());
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [dispatch, refresh]);

    const handleRefresh = () => setRefresh(!refresh);

    let content;

    if (loading === "loading") {
        content = <Loading />;
    } else if (error !== null) {
        content = (
            <Error error="Something went wrong!" onRefresh={handleRefresh} />
        );
    } else if (popular?.status === "error") {
        content = <Error error={popular?.message} onRefresh={handleRefresh} />;
    } else {
        content = (
            <>
                <div className="popular-container">
                    <PopularSlide articles={popular?.articles} />
                    <PopularList articles={popular?.articles} />
                </div>

                <RecentList home />
            </>
        );
    }

    return <div className="home">{content}</div>;
};

export default Home;
