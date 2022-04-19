import { memo } from "react";

import "./popularList.css";
import PopularListItem from "./PopularListItem";

const PopularList = ({ articles }) => {
    return (
        <div className="popular-list">
            {articles?.map((item, i) => {
                return <PopularListItem key={i} item={item} />;
            })}
        </div>
    );
};

export default memo(PopularList);
