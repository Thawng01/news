import { useCallback, useEffect, useRef, memo } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

import "./popularSlide.css";

const PopularSlide = ({ articles }) => {
    const indexRef = useRef(1);

    const onSlide = useCallback((n) => {
        const tags = document.getElementsByClassName("popular-slide-item");
        let tagsL = tags.length;

        if (n > tagsL) {
            indexRef.current = 1;
        }
        if (n < 1) {
            indexRef.current = tagsL;
        }

        for (let i = 0; i < tagsL; i++) {
            tags[i].style.display = "none";
        }
        tags[indexRef.current - 1].style.display = "block";
    }, []);

    useEffect(() => {
        if (articles?.length > 0) {
            onSlide(indexRef?.current);
        }
    }, [articles, onSlide]);

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
                            alt="slide"
                            className="popular-image image-fade"
                        />

                        <div className="popular-slide-details">
                            <Link
                                to={`detail/${item.title}`}
                                state={{ type: "popular" }}
                                className="popular-slide-card-title"
                            >
                                {item.title}
                            </Link>
                            <span className="popular-slides-author">
                                Author : {item?.author}
                            </span>
                            <span className="popular-slides-date">
                                Published At : {item.publishedAt}
                            </span>
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

export default memo(PopularSlide);
