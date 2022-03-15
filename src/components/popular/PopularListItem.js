import moment from "moment";
import { Link } from "react-router-dom";

import "./popularListItem.css";

const PopularListItem = ({ item }) => {
    return (
        <div className="popular-list-container">
            <img
                src={item.urlToImage}
                alt="popular image"
                className="popular-list-image"
            />
            <div className="popular-list-detail">
                <Link
                    to={`detail/${item.title}`}
                    state={{ type: "popular" }}
                    className="popular-list-title"
                >
                    {item.title}
                </Link>
                <span className="popular-list-author">
                    Author : {item.author}
                </span>
                <span className="popular-list-date">
                    {moment(item.publishedAt).fromNow()}
                </span>
            </div>
        </div>
    );
};

export default PopularListItem;
