import "./Pages.css";
import { NavLink } from "react-router-dom";

const WrongRoutePage = () => {

    return <div className="flex-center">
    <h2 className="wish-center-empty">
    <span className="cursive accent">WOW!</span>
    Such emptiness x0
    <span className="normal-font mar-up-10">
        Browse our cube collection{" "}
        <NavLink to="/productlisting" className="accent"> here</NavLink>{" "}
        </span>
        </h2>
        </div>
}

export default WrongRoutePage;
