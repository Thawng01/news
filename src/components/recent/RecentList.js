import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./recentList.css";
import {
    fetchRecentNews,
    selectedRecentNews,
} from "../../stores/slices/recentSlice";

import RecentListItem from "./RecentListItem";
import RecentListPaging from "./RecentListPaging";

const RecentList = ({ home }) => {
    const [page, setPage] = useState(0);
    const recentNews = useSelector(selectedRecentNews);

    const totalPages = Math.round(recentNews.totalResults / 8);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchRecentNews(page + 1));
    }, [page, dispatch]);

    function handlePaging(n) {
        setPage(page + n);
    }

    return (
        <div className="recent-list">
            <h2 className="recent-title">
                {home ? "Recent post" : "Related post"}
            </h2>
            <div className="recent-list-container">
                {recentNews?.articles?.map((item, i) => {
                    return <RecentListItem key={i} item={item} />;
                })}
            </div>

            {home && (
                <RecentListPaging
                    totalPages={totalPages}
                    page={page}
                    handlePaging={handlePaging}
                    setPage={setPage}
                />
            )}
        </div>
    );
};

export default RecentList;
