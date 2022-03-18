import React from "react";
import { useDispatch, useSelector } from "react-redux";

import {
    fetchPostByCountry,
    selectedCountry,
    selectedError,
    selectedLoading,
} from "../stores/slices/countrySlice";
const useCountry = () => {
    const error = useSelector(selectedError);
    const loading = useSelector(selectedLoading);
    const postByCountry = useSelector(selectedCountry);

    const dispatch = useDispatch();
    function fetchCountryPost(name) {
        dispatch(fetchPostByCountry(name));
    }

    return { error, loading, postByCountry, fetchCountryPost };
};

export default useCountry;
