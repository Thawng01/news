import { useContext } from "react";

import NavContext from "../components/navBar/NavContext";

const useNavContext = () => {
    const { showNav, setShowNav } = useContext(NavContext);
    return { showNav, setShowNav };
};

export default useNavContext;
