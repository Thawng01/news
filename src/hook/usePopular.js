import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
    fetchPopularNews,
    selectedError,
    selectedLoading,
    selectedPopularNews,
} from "../stores/slices/popularSlice";
const usePopular = () => {
    const loading = useSelector(selectedLoading);
    const error = useSelector(selectedError);
    const popular = useSelector(selectedPopularNews);

    const dispatch = useDispatch();
    const fetchPopularPost = useCallback(() => {
        dispatch(fetchPopularNews());
    }, [dispatch]);

    return { loading, error, popular, fetchPopularPost };
};

export default usePopular;
