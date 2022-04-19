import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
    categoryError,
    fetchPostByCategory,
    selectedCategory,
    selectedLoading,
} from "../stores/slices/categorySlice";

const useCategory = () => {
    const loading = useSelector(selectedLoading);
    const postByCategory = useSelector(selectedCategory);
    const error = useSelector(categoryError);

    const dispatch = useDispatch();

    const fetchCategoryPost = useCallback(
        (name) => {
            dispatch(fetchPostByCategory(name));
        },
        [dispatch]
    );

    return { loading, postByCategory, error, fetchCategoryPost };
};

export default useCategory;
