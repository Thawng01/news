import moment from "moment";

import "./popularList.css";

const PopularList = ({ articles }) => {
    return (
        <div className="popular-list">
            {articles?.map((item, i) => {
                return (
                    <div key={i} className="popular-list-container">
                        <img
                            src={item.urlToImage}
                            className="popular-list-image"
                        />
                        <div className="popular-list-detail">
                            <h4 className="popular-list-title">{item.title}</h4>
                            <p className="popular-list-author">
                                {" "}
                                Author : {item.author}
                            </p>
                            <p className="popular-list-date">
                                Published At :{" "}
                                {moment(item.publishedAt).fromNow()}
                            </p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default PopularList;
