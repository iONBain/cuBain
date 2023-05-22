import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCube } from "@fortawesome/free-solid-svg-icons";
import "./Pages.css";
import { useContext } from "react";
import { DataContext } from "../contexts/DataContext";

const Loader = () => {
  const {data:{loader}} = useContext(DataContext)
  return (
    <div className={`loader-main ${loader && "none"} `}>
      <FontAwesomeIcon className="loader" icon={faCube} size="lg" />
    </div>
  );
};

export default Loader;
