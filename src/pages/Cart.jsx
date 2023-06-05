import { useContext } from "react";
import { DataContext } from "../index";
import CartProductCard from "../components/CartProductCard";
import Coupons from "../components/Coupons";
import Emptiness from "../components/Emptiness";
import {getFinPrice, getRandomNumber} from "../utils"
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const {
    data: { cart },
  } = useContext(DataContext);
  const navigate = useNavigate()
  const getRandomDay = getRandomNumber(2,5)
  const finPrice = getFinPrice(cart)

  const isCartEmpty = cart.length === 0 ? true : false;
  const {data:{showCoupon,couponValue},dataDispatch} = useContext(DataContext)

  const couponValueRs = Math.floor((finPrice.finSP + cart.length*10)* couponValue * 0.01,1 )
  const discountValueRs = finPrice.finCP - finPrice.finSP
  const packingValueRs = cart.length*10

  const handleShowCoupon = () => {
      dataDispatch({
          type: "SET_COUPON",
          payload: true,
      })
  }

  const handleCheckout = () => {
    navigate("/checkout")
  }

    
  return isCartEmpty ? (
    <Emptiness  pageName="Cart" />
  ) : (
    <div className="cart-main flex-row">
      <Coupons finPrice={finPrice}/>
      <section className="cart-display flex-col">
        <h2 className="cart-display-heading">
                    <span className="cursive accent">{cart.length} cubes </span>
                    in your Cart :0
                    </h2>
        <section className="cart-display-items mar-up-10 pad-r-10">

        {cart.map((cartItem) => (
          <CartProductCard item={cartItem} key={cartItem._id} />
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
            <span>Discount:</span> <span className="color-orange">- Rs. {discountValueRs}</span> 
          </p>
          <p>
            <span>Packing Charges:</span> Rs. {packingValueRs}
          </p>
          <p>
            <span>Coupon: {couponValue===0 ? "" : <span className="color-grey sm">{couponValue}% OFF</span>}  </span> - Rs. {couponValueRs}
          </p>
          <p>
            <span> Amount payable:</span>{" "}
            <span className="accent"> Rs.{finPrice.finSP + packingValueRs - couponValueRs} </span>{" "}
          </p>
          <span>
            You Saved{" "}
            <span className="color-green">
              Rs. {couponValueRs + discountValueRs} !
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
        {/* <button className="btn btn-cart" onClick={()=>navigate("/productlisting")}>Continue Shopping</button> */}
        <button className="btn btn-cart" onClick={()=>handleShowCoupon()}>Apply Coupon {showCoupon}</button>
        <button className="btn btn-cart" onClick={()=>handleCheckout()}>CheckOut </button>
          </p>
        </section>
      </section>
    </div>
  );
};

export default Cart;
