import moment from "moment";
import { Link } from "react-router-dom";

import "./popularListItem.css";

const PopularListItem = ({ item }) => {
    return (
        <div className="popular-list-container">
            <img src={item.urlToImage} className="popular-list-image" />
            <div className="popular-list-detail">
                <Link
                    to={`detail/${item.title}`}
                    state={{ type: "popular" }}
                    className="popular-list-title"
                >
                    {item.title}
                </Link>
                <p className="popular-list-author">Author : {item.author}</p>
                <p className="popular-list-date">
                    {moment(item.publishedAt).fromNow()}
                </p>
            </div>
        </div>
    );
};

export default PopularListItem;
