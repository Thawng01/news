import { useSelector } from "react-redux";
import { useParams, useLocation } from "react-router-dom";
import { useEffect } from "react";

import "./detail.css";
import DetailItem from "../components/DetailItem";
import { selectedPopularNews } from "../stores/slices/popularSlice";
import FooterSubscribe from "../components/footer/FooterSubscribe";
import RecentList from "../components/recent/RecentList";
import PopularListItem from "../components/popular/PopularListItem";
import usePopular from "../hook/usePopular";

const Detail = () => {
    const { title } = useParams();
    const location = useLocation();
    const { fetchPopularPost } = usePopular();
    const popular = useSelector(selectedPopularNews);

    const article = useSelector((state) => {
        const type = location.state.type;
        if (type === "recent") {
            return state?.recent?.recent?.articles?.filter(
                (item) => item.title === title
            );
        } else if (type === "popular") {
            return state.popular.popular.articles.filter(
                (item) => item.title === title
            );
        } else if (type === "country") {
            return state?.country?.country?.articles?.filter(
                (item) => item.title === title
            );
        } else if (type === "category") {
            return state?.category?.category?.articles.filter(
                (item) => item.title === title
            );
        }
    });

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [article]);

    useEffect(() => {
        fetchPopularPost();
    }, [fetchPopularPost]);

    return (
        <div className="detail">
            <div className="detail-container">
                <div className="detail-item">
                    {article?.map((item, i) => {
                        return <DetailItem key={i} item={item} />;
                    })}
                </div>

                <div className="detail-side-container">
                    <div className="detail-subscribe">
                        <FooterSubscribe />
                    </div>
                    <div className="detail-popular-list">
                        <h2 className="detail-popular-title">Popular post</h2>
                        <div className="detail-popular-list-container">
                            {popular?.articles?.map((item, i) => {
                                return <PopularListItem key={i} item={item} />;
                            })}
                        </div>
                    </div>
                </div>
            </div>

            <RecentList />
        </div>
    );
};

export default Detail;
