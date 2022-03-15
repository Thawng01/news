import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useParams } from "react-router-dom";

import {
    categoryError,
    fetchPostByCategory,
    selectedCategory,
    selectedLoading,
} from "../stores/slices/categorySlice";

import "./category.css";
import CardListItem from "../components/CardListItem";
import Loading from "../components/Loading";
import Error from "../components/Error";

const Category = () => {
    const { name } = useParams();
    const [refresh, setRefresh] = useState(false);

    const loading = useSelector(selectedLoading);
    const postByCategory = useSelector(selectedCategory);
    const error = useSelector(categoryError);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPostByCategory(name));
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [dispatch, name, refresh]);

    const handleRefresh = () => setRefresh(!refresh);

    let content;

    if (loading === "loading") {
        content = <Loading />;
    } else if (error !== null) {
        content = (
            <Error error="Something went wrong!" onRefresh={handleRefresh} />
        );
    } else if (postByCategory?.status === "error") {
        content = (
            <Error onRefresh={handleRefresh} error={postByCategory?.message} />
        );
    } else {
        content = postByCategory?.articles?.map((item, i) => {
            return <CardListItem key={i} item={item} />;
        });
    }

    return <div className="category">{content}</div>;
};

export default Category;
