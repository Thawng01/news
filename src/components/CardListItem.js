import { Link } from "react-router-dom";
import moment from "moment";

import "./cardListItem.css";

const CardListItem = ({ item, category, country }) => {
    let state = "recent";
    if (category) {
        state = "category";
    } else if (country) {
        state = "country";
    }

    return (
        <div className="recent-list-item">
            <div className="recent-list-image-container">
                <img
                    src={item.urlToImage}
                    alt="card"
                    className="recent-list-image"
                />
            </div>
            <div className="recent-image-overlay">
                <Link
                    to={{
                        pathname: `/detail/${item.title}`,
                        state,
                    }}
                    className="recent-read-more"
                >
                    Read more
                </Link>
            </div>
            <div className="recent-list-detail">
                <Link
                    to={`/detail/${item.title}`}
                    state={{ type: state }}
                    className="recent-list-title"
                >
                    {item.title?.length > 40
                        ? item.title.slice(0, 40) + "..."
                        : item.title}
                </Link>
                <span className="recent-list-author-label">
                    Author :
                    <span className="recent-list-author">{item.author}</span>
                </span>
                <span className="recent-list-date">
                    {moment(item.publishedAt).fromNow()}
                </span>
            </div>
        </div>
    );
};

export default CardListItem;
