import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import "./category.css";
import CardListItem from "../components/CardListItem";
import Loading from "../components/Loading";
import Error from "../components/Error";
import useCategory from "../hook/useCategory";

const Category = () => {
    const { name } = useParams();
    const [refresh, setRefresh] = useState(false);

    const { error, loading, fetchCategoryPost, postByCategory } = useCategory();

    useEffect(() => {
        fetchCategoryPost(name);
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [name, refresh, fetchCategoryPost]);

    const handleRefresh = () => setRefresh(!refresh);

    let content;

    if (loading === "loading") {
        content = <Loading />;
    } else if (error !== null) {
        content = (
            <Error error="Something went wrong!" onRefresh={handleRefresh} />
        );
    } else if (postByCategory?.message) {
        content = (
            <Error onRefresh={handleRefresh} error={postByCategory?.message} />
        );
    } else {
        content = postByCategory?.articles?.map((item, i) => {
            return <CardListItem key={i} item={item} category />;
        });
    }

    return <div className="category">{content}</div>;
};

export default Category;
