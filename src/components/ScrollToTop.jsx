import { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { DataContext } from "../contexts/DataContext";

export default function ScrollToTop() {
    const { pathname } = useLocation();
    const {dataDispatch } = useContext(DataContext)
    useEffect(() => {
        window.scrollTo(0, 0);
        dataDispatch({
            type: "SET_LOADER",
            payload: false,
          });
        setTimeout(() => {
            dataDispatch({
                type: "SET_LOADER",
                payload: true,
              });
        }, 3000);
    }, [pathname]);

    return null;
}