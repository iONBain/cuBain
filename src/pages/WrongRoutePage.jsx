import { NavLink } from "react-router-dom";
import "./Pages.css";

const WrongRoutePage = () => {

    return <div className="flex-center flex-grow">
    <h2 className="wish-center-empty">
    <span className="cursive accent">Oh nO!</span>
    Seems like we landed on 404 ^_^
    <span className="normal-font mar-up-10">
        Browse our cube collection{" "}
        <NavLink to="/productlisting" className="accent"> here</NavLink>{" "}
        </span>
        </h2>
        </div>
}

export default WrongRoutePage;
