import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCube } from "@fortawesome/free-solid-svg-icons";
import "./Pages.css";
import { useContext } from "react";
import { DataContext } from "../contexts/DataContext";

const Loader = ({home,order}) => {
  const {data:{loader}} = useContext(DataContext)
  return (
    <div className={`loader-main flex-col  ${!loader && "none"} `}>
      <FontAwesomeIcon className="loader" icon={faCube} size="lg" />
      <h2>{home ? "building cUBain site :)" : order ? "Placing your order ..." :"fetching awesome cubes for you :0"}</h2>
    </div>
  );
};

export default Loader;
