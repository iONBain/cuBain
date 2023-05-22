import { Link, useNavigate } from "react-router-dom";
import ToastHandler from "../utils";

import "./ProductCard.css";
import { useContext } from "react";
import { DataContext } from "../contexts/DataContext";
const ProductCard = ({ item, wish }) => {
  const {
    name,
    imgLink,
    id,
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
  const navigate = useNavigate();
  // isInCart ? navigate("/cart") :
  const handleAddToCart = () => {
    if (wish) {
      dataDispatch({
        type: "REMOVE_FROM_WISHLIST",
        payload: item,
      });
      dataDispatch({
        type: "ADD_TO_CART",
        payload: item,
      });
      ToastHandler("success", "Moved to cart :p");
    } else {
      dataDispatch({
        type: "ADD_TO_CART",
        payload: item,
      });

      ToastHandler("success", "Added to cart!");
    }
  };

  const handleAddToWishlist = () => {
    if (isInWishlist) {
      dataDispatch({
        type: "REMOVE_FROM_WISHLIST",
        payload: item,
      });
      ToastHandler("info", "Removed from favorites");
    } else {
      dataDispatch({
        type: "ADD_TO_WISHLIST",
        payload: item,
      });
      ToastHandler("success", "Added to favorites!");
    }
  };

  const isInCart = cart.filter(({ id: pId }) => pId === id).length > 0;
  const isInWishlist = wishlist.filter(({ id: pId }) => pId === id).length > 0;
  const cp = Math.floor((price * 100) / (100 - dp), 10);

  return (
    <div className="wrap-card">
      <Link to={`/productdetails/${id}`} className="navLink">
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
        className={`btn add-to-cart ${isInCart ? "bg-dark" : ""} ${
          wish ? "w-80" : ""
        }`}
        onClick={isInCart ? () => navigate("/cart") : () => handleAddToCart()}
      >
        {isInCart ? "Go" : wish ? "Move" : "Add"} to Cart
      </button>
      {!wish && (
        <button
          className={`btn add-to-wish ${
            isInWishlist ? "color-orange bg-dark" : ""
          }`}
          onClick={() => handleAddToWishlist()}
        >
          {" "}
          &#9829;
        </button>
      )}
    </div>
  );
};

export default ProductCard;
