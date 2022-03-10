import React from "react";
import { useParams } from "react-router-dom";

const Country = () => {
    const { name } = useParams();
    return <div>{name}</div>;
};

export default Country;
