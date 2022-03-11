import { Link } from "react-router-dom";
import moment from "moment";

import "./recentListItem.css";

const RecentListItem = ({ item }) => {
    return (
        <div className="recent-list-item">
            <img src={item.urlToImage} className="recent-list-image" />
            <div className="recent-image-overlay">
                <Link
                    to={{
                        pathname: `detail/${item.title}`,
                        state: "recent",
                    }}
                    className="recent-read-more"
                >
                    Read more
                </Link>
            </div>
            <div className="recent-list-detail">
                <Link
                    to={`/detail/${item.title}`}
                    state={{ type: "recent" }}
                    className="recent-list-title"
                >
                    {item.title.length > 40
                        ? item.title.slice(0, 40) + "..."
                        : item.title}
                </Link>
                <p className="recent-list-author-label">
                    Author :
                    <span className="recent-list-author">{item.author}</span>
                </p>
                <p className="recent-list-date">
                    {moment(item.publishedAt).fromNow()}
                </p>
            </div>
        </div>
    );
};

export default RecentListItem;
