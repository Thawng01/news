import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import CardListItem from "../components/CardListItem";
import Error from "../components/Error";
import Loading from "../components/Loading";
import {
    fetchPostByCountry,
    selectedCountry,
    selectedError,
    selectedLoading,
} from "../stores/slices/countrySlice";

const Country = () => {
    const { name } = useParams();

    const [refresh, setRefresh] = useState(false);

    const error = useSelector(selectedError);
    const loading = useSelector(selectedLoading);
    const postByCountry = useSelector(selectedCountry);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPostByCountry(name));
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [dispatch, name, refresh]);

    const handleRefresh = () => setRefresh(!refresh);

    let content;

    if (loading === "loading") {
        content = <Loading />;
    } else if (error !== null) {
        content = <Error onRefresh={handleRefresh} />;
    } else {
        content = postByCountry?.articles?.map((item, i) => {
            return <CardListItem key={i} item={item} />;
        });
    }

    return <div className="category">{content}</div>;
};

export default Country;
