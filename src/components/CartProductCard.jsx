import { useContext } from "react";
import { DataContext } from "../contexts/DataContext";
import ToastHandler from "../utils";
import { useNavigate } from "react-router-dom";

const CartProductCard = ({ item }) => {
  const { name, price, discountPercentage: dp, imgLink, shapeType, qty } = item;
  const cp = Math.floor((price * 100) / (100 - dp), 10);
  const {
    data: { wishlist },
    dataDispatch,
  } = useContext(DataContext);
  const isInWishlist = wishlist.some(({ id }) => id === item.id);
  const navigate = useNavigate()
  const handleRemoveFromCart = (bool) => {
    dataDispatch({
      type: "REMOVE_FROM_CART",
      payload: item,
    });
    if (!bool) {
      ToastHandler("info", "Removed from Cart :(");
    }
  };
  const handleAddToWishlist = () => {
    handleRemoveFromCart(true);
    dataDispatch({
      type: "ADD_TO_WISHLIST",
      payload: item,
    });
    ToastHandler("info", "Moved to favourites ;p");
  };

  const handleUpdateCart = (incOrDec) => {
    incOrDec
      ? dataDispatch({
          type: "UPDATE_QTY_IN_CART_INC",
          payload: item,
        })
      : dataDispatch({
          type: "UPDATE_QTY_IN_CART_DEC",
          payload: item,
        });
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
            {shapeType}{" "}
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
          <button onClick={() => handleUpdateCart(false)} disabled={qty === 1}>
            -
          </button>
          <span>{qty}</span>
          <button onClick={() => handleUpdateCart(true)}>+</button>
        </p>
      </section>
    </div>
  );
};

export default CartProductCard;
