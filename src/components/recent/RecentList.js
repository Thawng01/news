import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

import "./recentList.css";
import {
    fetchRecentNews,
    selectedRecentNews,
} from "../../stores/slices/recentSlice";

const RecentList = () => {
    const [page, setPage] = useState(1);
    const recentNews = useSelector(selectedRecentNews);

    const totalPages = Math.round(recentNews.totalResults / 8);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchRecentNews(page));
    }, [page]);

    function handlePaging(n) {
        setPage(page + n);
    }

    let pages = () => {
        let pages = [];
        for (let i = 1; i < totalPages; i++) {
            pages.push(i);
        }

        return pages;
    };

    return (
        <div className="recent-list">
            <h2 className="recent-title">Recent news</h2>
            <div className="recent-list-container">
                {recentNews?.articles?.map((item, i) => {
                    return (
                        <div className="recent-list-item">
                            <img
                                src={item.urlToImage}
                                className="recent-list-image"
                            />
                            <div className="recent-list-detail">
                                <h2 className="recent-list-title">
                                    {item.title.length > 40
                                        ? item.title.slice(0, 40) + "..."
                                        : item.title}
                                </h2>
                                <p className="recent-list-author-label">
                                    Author :
                                    <span className="recent-list-author">
                                        {item.author}
                                    </span>
                                </p>
                                <p className="recent-list-date">
                                    {moment(item.publishedAt).fromNow()}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className="recent-paging-btns">
                {page > 1 && (
                    <button
                        className="recent-paging-left-btn"
                        onClick={() => handlePaging(-1)}
                    >
                        <MdKeyboardArrowLeft className="recent-paging-icon" />
                    </button>
                )}
                {pages().map((n) => {
                    return (
                        <span
                            key={n}
                            style={{
                                backgroundColor: n === page ? "red" : "#f1f1f1",
                                color: n === page ? "#fff" : "#000",
                            }}
                            onClick={() => setPage(n)}
                            className="paging-index"
                        >
                            {n}
                        </span>
                    );
                })}
                {page === totalPages && (
                    <button
                        className="recent-paging-right-btn"
                        onClick={() => handlePaging(1)}
                    >
                        <MdKeyboardArrowRight className="recent-paging-icon" />
                    </button>
                )}
            </div>
        </div>
    );
};

export default RecentList;
