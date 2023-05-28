import { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { DataContext } from "../contexts/DataContext";


export default function ScrollToTop() {
    const { pathname } = useLocation();
    const {dataDispatch } = useContext(DataContext)
    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        dataDispatch({
            type: "SET_LOADER",
            payload: true,
          });
        setTimeout(() => {
            dataDispatch({
                type: "SET_LOADER",
                payload: false,
              });
        }, 3500);
    }, [pathname,dataDispatch]);

    return null;
}