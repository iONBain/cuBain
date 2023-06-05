import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { DataContext } from "../contexts/DataContext";
import "./Pages.css";
import ToastHandler, { getCostPrice, getRandomNumber } from "../utils";
import axios from "axios";
import { addToCart } from "../services/cartAPIs";
import { AuthContext } from "../contexts/AuthContext";
import { addToWishlist, removeFromWishlist } from "../services/wishAPIs";

const ProductDetails = () => {
  const { productID } = useParams();
  const navigate = useNavigate();
  const { token } = useContext(AuthContext);
  const [product, setProduct] = useState([]);
  const {
    data: { cart, wishlist },
    dataDispatch,
  } = useContext(DataContext);
  useEffect(() => {
    (async () => {
      try {
        const { status, data } = await axios.get(`/api/products/${productID}`);
        if (status === 200) {
          setProduct(data.product);
        }
      } catch (e) {
        console.error(e);
      }
    })();
  }, [productID]);

  const isInCart = cart.some(({ _id }) => _id === product._id);
  const isInWishlist = wishlist.some(({ _id: pId }) => pId === product._id);

  const {
    name,
    imgLink,
    price,
    rating,
    discountPercentage: dp,
    ratingCount,
    skill,
  } = product && product;
  const cp = getCostPrice(price, dp);
  const getRandomDay = getRandomNumber(2, 5);

  const addToCartHandler = () => {
    addToCart(product, token, dataDispatch);
    ToastHandler("success", "Added to cart!");
  };
  const handleRedirect = () => {
    navigate("/login");
    ToastHandler("warn", "Please login to continue");
  };
  const addToFavs = () => {
    if (isInWishlist) {
      // dataDispatch({
      //   type: "REMOVE_FROM_WISHLIST",
      //   payload: product,
      // });
      removeFromWishlist(product._id, token, dataDispatch);
      ToastHandler("info", "Removed from favorites");
    } else {
      addToWishlist(product, token, dataDispatch);
      // dataDispatch({
      //   type: "ADD_TO_WISHLIST",
      //   payload: product,
      // });
      ToastHandler("success", "Added to favorites!");
    }
  };

  return (
    <div className="product-details-main">
      <button
        className="details-back btn"
        onClick={() => navigate("/productlisting")}
      >
        Back to shopping
      </button>
      <section className="details-img">
        <img src={imgLink} alt="" className="details-img-image" />
      </section>
      <section className="details-of-cube">
        <h2 className="details-heading-cube accent">{name}</h2>
        <section className="flex-row">
          <p className="details-green">{dp}% OFF </p>
          <p className="details-recommended">{skill}</p>
        </section>
        <p className="color-orange">
          {rating} &#9733;
          <span className="sm"> ({ratingCount}) </span>
        </p>
        <p className="details-list sm">COD Available</p>
        <p className="details-list sm">Get delivered in {getRandomDay} days!</p>
        <p>
          Price: <span className="accent">Rs.{price}</span>{" "}
          <span className="color-grey sm strike">Rs.{cp}</span>
          <p className="sm color-grey">**Inclusive all taxes</p>
        </p>
      </section>
      <button
        className={`btn btn-details-cart ${isInCart && "bg-less-dark"}`}
        onClick={
          !token
            ? () => handleRedirect()
            : isInCart
            ? () => navigate("/cart")
            : () => addToCartHandler()
        }
        // onClick={isInCart ? () => navigate("/cart") : () => addToCartHandler()}
      >
        {isInCart ? "Go" : "Add"} to Cart
      </button>
      <button
        className={`btn btn-details-wish ${isInWishlist && "bg-less-dark"}`}
        onClick={
          !token ? () => handleRedirect() : () => addToFavs()
        }
      >
        {isInWishlist ? "Remove from" : "Add to"} Favourites
      </button>
    </div>
  );
};

export default ProductDetails;
