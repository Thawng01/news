import "./detailItem.css";

const DetailItem = ({ item }) => {
    return (
        <div className="detail-item-container">
            <h2 className="detail-title">{item.title}</h2>
            <span>
                Author :<span className="detail-author">{item.author}</span>
            </span>
            <span>
                Date :<span className="detail-date">{item.publishedAt}</span>
            </span>
            <p>{item.description}</p>
            <img
                className="detail-image"
                alt="detail image"
                src={item.urlToImage}
            />
            <span>{item.content}</span>
            <a className="detail-read-more" href={item.url}>
                Read more
            </a>
        </div>
    );
};

export default DetailItem;
