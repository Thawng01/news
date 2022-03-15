import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
    fetchPostBySearch,
    selectedError,
    selectedLoading,
    selectedSearch,
} from "../stores/slices/searchSlice";

import "./search.css";
import Loading from "../components/Loading";
import Error from "../components/Error";
import CardListItem from "../components/CardListItem";

const Search = () => {
    const { name } = useParams();
    const [refresh, setRefresh] = useState(false);

    const loading = useSelector(selectedLoading);
    const error = useSelector(selectedError);
    const postBySearch = useSelector(selectedSearch);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPostBySearch(name));
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
    } else if (postBySearch?.status === "error") {
        content = (
            <Error onRefresh={handleRefresh} error={postBySearch?.message} />
        );
    } else {
        content = postBySearch?.articles?.map((item, i) => {
            return <CardListItem key={i} item={item} />;
        });
    }

    return <div className="search">{content}</div>;
};

export default Search;
