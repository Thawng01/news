import { useEffect, useState } from "react";

import "./home.css";
import PopularSlide from "../components/popular/PopularSlide";
import PopularList from "../components/popular/PopularList";
import RecentList from "../components/recent/RecentList";
import Error from "../components/Error";
import Loading from "../components/Loading";
import usePopular from "../hook/usePopular";

const Home = () => {
    const [refresh, setRefresh] = useState(false);
    const { error, loading, popular, fetchPopularPost } = usePopular();

    useEffect(() => {
        fetchPopularPost();
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [refresh, fetchPopularPost]);

    const handleRefresh = () => setRefresh(!refresh);

    let content;

    if (loading === "loading") {
        content = <Loading />;
    } else if (error !== null) {
        content = (
            <Error error="Something went wrong!" onRefresh={handleRefresh} />
        );
    } else if (popular?.message) {
        content = <Error error={popular?.message} onRefresh={handleRefresh} />;
    } else {
        content = (
            <div className="home-container">
                <div className="popular-container">
                    <PopularSlide articles={popular?.articles} />
                    <PopularList articles={popular?.articles} />
                </div>

                <RecentList home />
            </div>
        );
    }

    return <div className="home">{content}</div>;
};

export default Home;
