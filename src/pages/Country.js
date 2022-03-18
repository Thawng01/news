import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import CardListItem from "../components/CardListItem";
import Error from "../components/Error";
import Loading from "../components/Loading";
import useCountry from "../hook/useCountry";

const Country = () => {
    const { name } = useParams();
    const [refresh, setRefresh] = useState(false);

    const { error, loading, postByCountry, fetchCountryPost } = useCountry();

    useEffect(() => {
        fetchCountryPost(name);
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [name, refresh]);

    const handleRefresh = () => setRefresh(!refresh);

    let content;

    if (loading === "loading") {
        content = <Loading />;
    } else if (error !== null) {
        content = (
            <Error error="Something went wrong!" onRefresh={handleRefresh} />
        );
    } else if (postByCountry?.message) {
        content = (
            <Error onRefresh={handleRefresh} error={postByCountry?.message} />
        );
    } else {
        content = postByCountry?.articles?.map((item, i) => {
            return <CardListItem key={i} item={item} />;
        });
    }

    return <div className="category">{content}</div>;
};

export default Country;
