import { useContext } from "react";
import { DataContext } from "../contexts/DataContext";
import ToastHandler, { getCostPrice } from "../utils";
import { useNavigate } from "react-router-dom";
import { removeFromCart, updateQtyCart } from "../services/cartAPIs";
import { AuthContext } from "../contexts/AuthContext";
import { addToWishlist } from "../services/wishAPIs";
import { findItemIn } from "../services/findItem";

const CartProductCard = ({ item }) => {
  const { name, price, discountPercentage: dp, imgLink, shapeType, qty } = item;
  const cp = getCostPrice(price, dp);
  const { token } = useContext(AuthContext);
  const {
    data: { wishlist },
    dataDispatch,
  } = useContext(DataContext);
  const isInWishlist = findItemIn(wishlist, item);
  const navigate = useNavigate();

  const removeCoupon = () => {
    dataDispatch({
      type: "SET_COUPON_VALUE",
      payload: 0,
    });
  };
  const handleRemoveFromCart = (bool) => {
    removeFromCart(item._id, token, dataDispatch);
    removeCoupon();
    if (!bool) {
      ToastHandler("info", "Removed from Cart :(");
    }
  };

  const handleAddToWishlist = () => {
    handleRemoveFromCart(true);
    addToWishlist(item, token, dataDispatch);
    removeCoupon();
    ToastHandler("info", "Moved to favourites ;p");
  };

  const handleUpdateCart = (incOrDec) => {
    removeCoupon();
    updateQtyCart(item._id, token, incOrDec, dataDispatch);
  };

  return (
    <div className="cart-card-main flex-row">
      <section className="cart-img-cont">
        <img src={imgLink} height="150px" alt="" />
      </section>
      <section className="cart-details-con flex-col">
        <h4 className="accent">{name}</h4>
        <p className="flex-row">
          <span className="cart-discount sm "> {dp}% OFF </span>
          <span className="cart-discount cart-cube-shape sm ">
            {shapeType.toUpperCase()}{" "}
          </span>
        </p>
        <p>
          Price: <span className="accent">Rs.{price}</span>{" "}
          <span className="strike color-grey sm">Rs.{cp}</span>{" "}
        </p>
        <p className="flex-row btns-cart">
          <button
            className="cart-remove btn"
            onClick={() => handleRemoveFromCart()}
          >
            Remove
          </button>
          <button
            className={`cart-remove btn ${isInWishlist && "bg-less-dark"} `}
            onClick={
              isInWishlist
                ? () => navigate("/wishlist")
                : () => handleAddToWishlist()
            }
          >
            {isInWishlist ? "In" : "Move to"} Favs
          </button>
        </p>
      </section>
      <section className="cart-quant flex-col">
        <p className="cart-quant-btns flex-row">
          <button
            onClick={() => handleUpdateCart("decrement")}
            disabled={qty === 1}
          >
            -
          </button>
          <span>{qty}</span>
          <button onClick={() => handleUpdateCart("increment")}>+</button>
        </p>
      </section>
    </div>
  );
};

export default CartProductCard;
