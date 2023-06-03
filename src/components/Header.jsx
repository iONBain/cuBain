import "./components.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCube,
  faShoppingCart,
  faHeart,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { DataContext } from "../contexts/DataContext";

const Header = () => {
  // const navigate = useNavigate()
  const { data:{search,cart,wishlist},dataDispatch } = useContext(DataContext);
  const handleSearch = (e) => {
    dataDispatch({
      type: "SET_SEARCH",
      payload: e.target.value,
    });
  };
  const getCntCart = cart.length
  const getCntWish = wishlist.length
  const getActiveStyle = ({isActive}) => ({
    color:isActive ? "var(--lightestBlue)" : "inherit"
  })
  return (
    <header className="header z-50">
      <NavLink style={getActiveStyle} to="/" className="no-style tooltip">
        <h3> cUBain </h3>
        <p className="tooltiptext color-white"> Home</p>
      </NavLink>
      <input
        placeholder="Search for cubes"
        className="input-search"
        value={search}
        onInput={handleSearch}
        type="text"
      />
      <section className="flex-row header-nav-icons-container">
        <NavLink style={getActiveStyle}  to="/productlisting" className="no-style tooltip">
          <FontAwesomeIcon icon={faCube} size="lg" />
          <p className="tooltiptext color-white"> Cubes</p>
        </NavLink>
        <NavLink style={getActiveStyle} to="/cart" className="no-style tooltip header-cart">
          <span className={`bg-green ${getCntCart ? "" : "none"}`}>{getCntCart}</span>
          <FontAwesomeIcon icon={faShoppingCart} size="lg" /> 
          <p className="tooltiptext color-white"> Cart </p>
        </NavLink>
        <NavLink style={getActiveStyle} to="/wishlist" className="no-style tooltip header-cart">
          <FontAwesomeIcon icon={faHeart} size="lg" />
          <span className={`bg-green ${getCntWish ? "" : "none"}`}>{getCntWish}</span>
          <p className="tooltiptext color-white"> Favs</p>
        </NavLink>
        <NavLink style={getActiveStyle} to="/login" className="no-style tooltip">
          <FontAwesomeIcon icon={faUserCircle} size="lg" />
          <p className="tooltiptext color-white"> Login</p>
        </NavLink>
        {/* <NavLink to="/productlisting" className="no-style tooltip">
          <FontAwesomeIcon icon={faCube} size="lg" />
          <p className="tooltiptext"> Home</p>
        </NavLink> */}
      </section>
    </header>


  );
};

export default Header;
