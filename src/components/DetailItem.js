import "./detailItem.css";

const DetailItem = ({ item }) => {
    return (
        <div className="detail-item-container">
            <h2 className="detail-title">{item.title}</h2>
            <span>
                Author :<span className="detail-author">{item.author}</span>
            </span>
            <span className="detail-date-container">
                Date :<span className="detail-date">{item.publishedAt}</span>
            </span>
            <p className="detail-description">{item.description}</p>
            <div className="detail-image-container">
                <img
                    className="detail-image"
                    alt="detail"
                    src={item.urlToImage}
                />
            </div>
            <span className="detail-content">{item.content}</span>
            <a className="detail-read-more" href={item.url}>
                Read more
            </a>
        </div>
    );
};

export default DetailItem;
