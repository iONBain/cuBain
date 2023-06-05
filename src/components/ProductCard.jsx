import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { DataContext } from "../contexts/DataContext";
import ToastHandler, { getCostPrice } from "../utils";
import "./ProductCard.css";
import { addToCart } from "../services/cartAPIs";
import { AuthContext } from "../contexts/AuthContext";
import { addToWishlist, removeFromWishlist } from "../services/wishAPIs";
import { findItemIn } from "../services/findItem";

const ProductCard = ({ item, wish }) => {
  const {
    name,
    imgLink,
    _id,
    rating,
    ratingCount,
    price,
    isRecommended,
    discountPercentage: dp,
  } = item;

  const {
    data: { cart, wishlist },
    dataDispatch,
  } = useContext(DataContext);
  const { token } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate("/login");
    ToastHandler("warn", "Please login to continue");
  };

  const handleAddToCart = () => {
    addToCart(item, token, dataDispatch);
    ToastHandler("success", "Added to cart!");
  };

  const handleAddToWishlist = () => {
    if (isInWishlist) {
      removeFromWishlist(item._id, token, dataDispatch);
      ToastHandler("info", "Removed from favorites");
    } else {
      addToWishlist(item, token, dataDispatch);
      ToastHandler("success", "Added to favorites!");
    }
  };

  const isInCart = findItemIn(cart, item);
  const isInWishlist = findItemIn(wishlist, item);
  const cp = getCostPrice(price, dp);

  return (
    <div className="wrap-card">
      <Link to={`/productdetails/${_id}`} className="navLink">
        <div className="flex-col prod-content">
          <p className="rating">
            {rating} &#9733;
            <span className="rating-count">({ratingCount})</span>
          </p>
          <p className={isRecommended ? "recommended" : "none"}>Best Seller</p>
          <p className="discount">{dp}% OFF </p>
          <img src={imgLink} alt="" height="100px" className="img-prods" />
          <h4 className="prod-name">{name}</h4>
          <p className="prod-price">
            Rs.{isInCart} {price} <span className="strike-cp">Rs.{cp}</span>{" "}
          </p>
        </div>
      </Link>

      <button
        className={`btn add-to-cart ${isInCart ? "bg-dark" : ""}`}
        onClick={
          !token
            ? () => handleRedirect()
            : isInCart
            ? () => navigate("/cart")
            : () => handleAddToCart()
        }
      >
        {isInCart ? "Go" : wish ? "Move" : "Add"} to Cart
      </button>
      {/* {!wish && ( */}
        <button
          className={`btn add-to-wish ${
            isInWishlist ? "color-orange bg-dark" : ""
          }`}
          onClick={
            !token ? () => handleRedirect() : () => handleAddToWishlist()
          }
        >
          &#9829;
        </button>
      {/* )} */}
    </div>
  );
};

export default ProductCard;
