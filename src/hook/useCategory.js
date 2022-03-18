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

    function fetchCategoryPost(name) {
        dispatch(fetchPostByCategory(name));
    }

    return { loading, postByCategory, error, fetchCategoryPost };
};

export default useCategory;
