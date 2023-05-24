import { useContext } from "react";
import { DataContext } from "../index";
import CartProductCard from "../components/CartProductCard";
import { NavLink, useNavigate } from "react-router-dom";
import Emptiness from "../components/Emptiness";
const Cart = () => {
  const {
    data: { cart },
  } = useContext(DataContext);
  const navigate = useNavigate()
  const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  const getRandomDay = getRandomNumber(2,5)
  const calcCP = (sp, discount) =>
    Math.floor((sp * 100) / (100 - discount), 10);
  const finPrice = cart.reduce(
    ({ finSP, finCP,totalCubes }, { price, qty, discountPercentage: dp }) => ({
      finSP: finSP + price * qty,
      finCP: calcCP(price, dp) * qty + finCP,
      totalCubes: totalCubes + qty
    }),
    { finSP: 0, finCP: 0, totalCubes:0 }
  );
  // const finCP =

  const isCartEmpty = cart.length === 0 ? true : false;

  return isCartEmpty ? (
    <Emptiness  pageName="Cart" />
  ) : (
    <div className="cart-main flex-row">
      <section className="cart-display flex-col">
        <h2 className="cart-display-heading">Cart Items <span className="accent"> ({cart.length}) </span></h2>
        <section className="cart-display-items mar-up-10 pad-r-10">

        {cart.map((cartItem) => (
          <CartProductCard item={cartItem} key={cartItem.id} />
          ))}
          </section>
      </section>
      <section className="flex-col cart-order-summary">
        <h2>Order Summary</h2>
        <section className="cart-order-summary-details flex-col">
          <p>
            <span>Price:</span> Rs. {finPrice.finCP}{" "}
          </p>
          <p>
            <span> Amount payable:</span>{" "}
            <span className="accent"> Rs.{finPrice.finSP} </span>{" "}
          </p>
          <span>
            You Saved{" "}
            <span className="color-green">
              Rs. {finPrice.finCP - finPrice.finSP} !
            </span>
          </span>
            <span className="mar-up-10">
              Get your <span className="color-orange">{finPrice.totalCubes} cubes </span> deliverd in <span className="color-orange">
                {getRandomDay} days :)
                
                </span>
            </span>
            <span className="sm accent">
              COD Available.
            </span>
          <p>

        <button className="btn btn-cart" onClick={()=>navigate("/productlisting")}>Continue Shopping</button>
        <button className="btn btn-cart">CheckOut </button>
          </p>
        </section>
      </section>
    </div>
  );
};

export default Cart;
