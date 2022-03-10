import React from "react";

import { useParams } from "react-router-dom";

import "./category.css";

const Category = () => {
    const { name } = useParams();

    return <div className="category">{name}</div>;
};

export default Category;
