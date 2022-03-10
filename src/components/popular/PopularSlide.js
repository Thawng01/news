import { useRef } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

import "./popularSlide.css";

const PopularSlide = ({ articles }) => {
    const indexRef = useRef(0);

    const onSlide = (n) => {
        const tags = document.getElementsByClassName("popular-slide-item");
        let tagsL = tags.length;

        if (n > tagsL - 1) {
            indexRef.current = 0;
        }
        if (n < 1) {
            indexRef.current = tagsL - 1;
        }

        for (let i = 0; i < tagsL; i++) {
            tags[i].style.display = "none";
        }
        tags[indexRef.current].style.display = "block";
    };

    function handleSlide(num) {
        const index = (indexRef.current += num);
        onSlide(index);
    }

    return (
        <div className="popular">
            {articles?.map((item, i) => {
                return (
                    <div key={i} className="popular-slide-item">
                        <img
                            src={item.urlToImage}
                            className="popular-image fade"
                        />
                        <div className="popular-slide-details">
                            <h2 className="popular-slide-title">
                                {item.title}
                            </h2>
                            <p className="popular-slide-author">
                                Author : {item?.author}
                            </p>
                            <p className="popular-slide-date">
                                Published At : {item.publishedAt}
                            </p>
                        </div>
                    </div>
                );
            })}

            <span
                className="popular-slide-left-icon"
                onClick={() => handleSlide(-1)}
            >
                <MdKeyboardArrowLeft className="popular-slide-icon" />
            </span>
            <span
                className="popular-slide-right-icon"
                onClick={() => handleSlide(1)}
            >
                <MdKeyboardArrowRight className="popular-slide-icon" />
            </span>
        </div>
    );
};

export default PopularSlide;
